const axios = require("axios");
const BASE = `https://api.coinbase.com/v2`;

/**
 * @function getExchangeRates() - async
 * @param {String} input - a string that represents the ID of the currency
 * the user wants exchange rates for. Default is USD.
 * @returns {Function} - a console.log of the completed string of exchange rates
 */
const getExchangeRates = async (input = "USD") => {
  try {
    let list = `\nThe exchange rates for ${input} are:`;
    const response = await axios.get(
      `${BASE}/exchange-rates?currency=${input}`
    );
    const rates = response.data.data.rates;
    // loop through the object to format the exchange rates nicely for the user
    for (const key in rates) {
      list += `\n${key}: ${parseFloat(rates[key]).toFixed(3)}`;
    }
    return console.log(list);
  } catch (error) {
    console.log(error.message);
  }
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

/**
 * @function getSpotPrice()
 * @param {String} date - input by the user to specify which spot price to attain
 * @returns {Function} - console.log of a string containing the spot price of BTC
 * from the specified date.
 */
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

/**
 * @function getTime()
 * @returns {Object} - an object containing two keys, the server date
 * and the server time.
 */
const getTime = async () => {
  try {
    const response = await axios.get(`${BASE}/time`);
    const timeData = response.data.data.iso;
    const date = timeData.substr(0, 10);
    const time = timeData.substr(11, 8);
    return { date, time };
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getExchangeRates,
  getBuySell,
  getSpotPrice,
  getTime,
};
