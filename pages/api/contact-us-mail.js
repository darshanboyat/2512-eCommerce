import { sendMail } from "../../utils/mailer.js";
import { thankyouConfirmation } from "../../utils/template.js";

async function handleContactUsRequest(email, customerName) {
  return new Promise(async (resolve, reject) => {
    try {
      const payload = {
        to: email,
        subject: "Contact Us Confirmation | Pacchis Barah",
        html: thankyouConfirmation(customerName),
      };
      await sendMail(payload);
      resolve(true);
    } catch (error) {
      reject({
        error: error?.message || "Email not sent!",
      });
    }
  });
}
export default async function handler(req, res) {
  const { email, customerName } = req.body;
  if (req.method === "POST") {
    handleContactUsRequest(email, customerName)
      .then((resp) => {
        if (resp) {
          res.status(200).json({ success: true });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
}
