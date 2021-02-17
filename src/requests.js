const axios = require("axios");
const BASE = `https://api.coinbase.com/v2`;

const convertCurrency = async (currency) => {};

const getBuySell = async () => {};

const getSpotPrice = async () => {};

const getTime = async () => {};

const allCurrencies = async () => {
  const response = await axios.get(`${BASE}/currencies`);
  const dataArr = response.data.data;
  let currencies = dataArr.reduce((list, element) => {
    list += `(${element.id}) ${element.name}\n`;
    return list;
  }, "");
  currencies += `(BTC) Bitcoin\n(ETH) Ether\n`;
  return currencies;
};

allCurrencies();
module.exports = {
  convertCurrency,
  getBuySell,
  getSpotPrice,
  getTime,
  allCurrencies,
};
