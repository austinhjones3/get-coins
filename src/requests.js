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

const getBuySell = async () => {};

const getSpotPrice = async () => {};

const getTime = async () => {};

/**
 * @function allCurrencies() - async
 * @returns {String} - string of currency ID's and names to display to the user
 */
const allCurrencies = async () => {
  const response = await axios.get(`${BASE}/currencies`);
  // the array is wrapped in an object key called data inside of the higher data key
  const dataArr = response.data.data;
  // formatted nice and neat in a string for the user
  let currencies = dataArr.reduce((list, element) => {
    list += `(${element.id}) ${element.name}\n`;
    return list;
  }, `\n`);
  currencies += `(BTC) Bitcoin\n(ETH) Ether\n`;
  return currencies;
};

getExchangeRates();
module.exports = {
  getExchangeRates,
  getBuySell,
  getSpotPrice,
  getTime,
  allCurrencies,
};
