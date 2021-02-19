const axios = require("axios");
const BASE = `https://api.coinbase.com/v2`;

/**
 * @function getExchangeRates() - async
 * @param {String} input - a string that represents the ID of the currency
 * the user wants exchange rates for. Default is USD.
 * @returns {Function} - a console.log of the completed string of exchange rates
 */
const getExchangeRates = async (input = "USD") => {
  let list = `\nThe exchange rates for ${input} are:`;
  const response = await axios.get(`${BASE}/exchange-rates?currency=${input}`);
  const rates = response.data.data.rates;
  // loop through the object to format the exchange rates nicely for the user
  for (const key in rates) {
    list += `\n${key}: ${parseFloat(rates[key]).toFixed(3)}`;
  }
  return console.log(list);
};

/**
 * @function getBuySell() - async
 * @param {String} BTCorETH - a string that is either "BTC" or "ETH" to be
 * converted to buy/sell prices
 * @returns {Function} - a console.log of a string that includes the buy/sell prices
 * of ${BTCorETH} in ${currency}
 * @example BTC converted to USD buy/sell prices
 */
const getBuySell = async (BTCorETH) => {
  try {
    const buy = await axios.get(`${BASE}/prices/${BTCorETH}-USD/buy`);
    const sell = await axios.get(`${BASE}/prices/${BTCorETH}-USD/sell`);
    const buyAmt = buy.data.data.amount;
    const sellAmt = sell.data.data.amount;
    return console.log(
      `\nThe current buy/sell prices for ${BTCorETH} in USD are:\n` +
        `BUY: $${buyAmt}\nSELL: $${sellAmt}`
    );
  } catch (error) {
    console.log(error.message);
  }
};

const getSpotPrice = async (date) => {
  try {
    const response = await axios.get(`${BASE}/prices/spot?date=${date}`);
    const spotData = response.data.data;
    return console.log(
      `\nThe spot price of Bitcoin on ${date} is $${spotData.amount} ${spotData.currency}.`
    );
  } catch (error) {
    console.log(error.message);
  }
};

const getTime = async () => {};
module.exports = {
  getExchangeRates,
  getBuySell,
  getSpotPrice,
  getTime,
};
