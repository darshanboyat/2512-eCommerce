const axios = require("axios");

async function convertCurrency(inrAmount, targetCurrencyCode) {
  try {
    // Replace 'YOUR_APP_ID' with your actual Open Exchange Rates API key
    const appId = "277f49406e3d5d56a9bf958c";

    const response = await axios.get(
      `https://open.er-api.com/v6/latest/INR?app_id=${appId}`
    );
    const exchangeRates = response.data.rates;

    if (!exchangeRates.hasOwnProperty(targetCurrencyCode)) {
      throw new Error("Invalid target currency code");
    }

    const targetRate = exchangeRates[targetCurrencyCode];
    const convertedAmount = inrAmount * targetRate;

    // Use Intl.NumberFormat to format the amount and currency symbol
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: targetCurrencyCode,
    });

    const formattedAmount = formatter.format(convertedAmount);

    return await formattedAmount;
  } catch (error) {
    console.error("Error converting currency:", error.message);
    throw error;
  }
}
async function  getConvertedCurrency(amount, targeted) {
  // Example usage
  console.log(amount, targeted);
  const inrAmount = amount;
  const targetCurrencyCode = targeted; // Replace with the desired currency code

  return await convertCurrency(inrAmount, targetCurrencyCode)
}

module.exports = getConvertedCurrency;
