const prompt = require("prompt-sync")();
const axios = require("axios");
const {
  getExchangeRates,
  getBuySell,
  getSpotPrice,
  getTime,
  allCurrencies,
} = require("./requests");

/**
 * @function processRequests() - async
 * @returns {Function} - the function is recursive and used recursion to run
 * through the menu over and over again if the user wishes to. Else, the function
 * returns a console.log message to signify to the user that the program is ended.
 */
const processRequests = async () => {
  console.log(
    `\nPlease choose one by typing the number:\n1. Get exchange rates of a currency` +
      `\n2. Attain buy and sell price of Bitcoin or Ether` +
      `\n3. Get spot price of Bitcoin\n4. Get the current time` +
      `\nAlternatively, enter "n" to exit.`
  );
  let choice = prompt();

  switch (choice) {
    case "n":
      return console.log(`\nThanks for testing my program!`);
    case "1":
      const list = await allCurrencies();
      // await getExchangeRates();
      console.log(list);
      console.log(`\nAbove is a list of world currencies and resources.`);
      do {
        choice = prompt(
          "Please enter one of the 3 character currency ID's to convert: "
        );
      } while (
        !list.includes(choice) ||
        choice.length < 3 ||
        choice.length > 3
      );
      await getExchangeRates(choice);
      break;
    case "2":
      console.log(`\nEther or Bitcoin? Enter ETH or BTC: `);

      // await getBuySell();
      break;
    case "3":
      console.log(`\nspot price attained`);
      // await getSpotPrice();
      break;
    case "4":
      console.log(`\ntime acquired`);
      // await getTime();
      break;
    default:
      console.log(`\nEntry invalid.`);
  }

  console.log(`\nDo you want to make another request to coinbase? (y/n)`);
  choice = prompt();
  switch (choice) {
    case "y":
      return processRequests();
    default:
      return console.log(`\nThanks for testing my program!`);
  }
};

console.log(
  `\nWelcome and thank you for using my section 1 review program, get-coins!\n`
);
processRequests();
