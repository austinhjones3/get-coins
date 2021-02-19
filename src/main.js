const prompt = require("prompt-sync")();
const axios = require("axios");
const {
  getExchangeRates,
  getBuySell,
  getSpotPrice,
  getTime,
} = require("./requests");
const { list } = require("../test-data/allCurrencies");
const listAll = list();

/**
 * @function processRequests() - async
 * @returns {Function} - the function is recursive and used recursion to run
 * through the menu over and over again if the user wishes to. Else, the function
 * returns a console.log message to signify to the user that the program is ended.
 */
const processRequests = async () => {
  console.log(
    `\nPlease choose one by typing the number:\n1. Get exchange rates of a currency` +
      `\n2. Attain buy and sell price of Bitcoin or Ether in USD` +
      `\n3. Get spot price of Bitcoin in USD\n4. Get the current server time` +
      `\nAlternatively, enter "n" to exit.`
  );
  let choice = prompt();

  switch (choice) {
    case "n":
      return console.log(`\nThanks for testing my program!`);

    case "1":
      await _handleOne();
      break;

    case "2":
      await _handleTwo();
      break;

    case "3":
      await _handleThree();
      break;
    case "4":
      await _handleFour();
      break;
    default:
      console.log(`\nEntry invalid.`);
  }

  console.log(`\nDo you want to make another request to coinbase? (y/n)`);
  const newReq = prompt();
  if (newReq === "n") return console.log(`\nThanks for testing my program!`);
  return processRequests();
};

const _handleOne = async () => {
  console.log(listAll);
  console.log(`\nAbove is a list of world currencies and resources.`);
  let currency;
  do {
    currency = prompt(
      "Please enter one of the 3 character currency ID's to convert: "
    ).toUpperCase();
  } while (
    !listAll.includes(currency) ||
    currency.length < 3 ||
    currency.length > 3
  );
  const result = await getExchangeRates(currency);
  return result;
};

const _handleTwo = async () => {
  console.log(`\nPlease enter ETH or BTC: `);
  const ETHorBTC = prompt();
  switch (ETHorBTC) {
    case "ETH":
      return await getBuySell(ETHorBTC);

    case "BTC":
      return await getBuySell(ETHorBTC);

    default:
      console.log("Invalid entry.");
      return _handleTwo();
  }
};

const _handleThree = async () => {
  console.log(`\nPlease enter a date in the format of YYYY-MM-DD: `);
  const date = prompt();
  if (date.length === 10 && date.includes("-")) return await getSpotPrice(date);
  console.log("Invalid entry.");
  return _handleThree();
};

const _handleFour = async () => {
  const time = await getTime();
  return console.log(`\nServer time:\nDATE: ${time.date}\nTIME: ${time.time}`);
};
console.log(
  `\nWelcome and thank you for using my section 1 review program, get-coins!\n`
);
processRequests();
