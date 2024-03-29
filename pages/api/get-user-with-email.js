import { User } from "../../schema/user.js";
import { connection } from "../../utils/database.js";

async function getUser(req, res) {
  try {
    const { email } = req.body;
    await connection();

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: ture,
        success: false,
        message: "User not found!!",
      });
    }
    return res.status(200).json({
      error: false,
      success: true,
      message: "success",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}

export default getUser;
