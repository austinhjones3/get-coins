const prompt = require("prompt-sync")();
const {
  convertCurrency,
  getBuySell,
  getSpotPrice,
  getTime,
} = require("./requests");

const processRequests = async () => {
  console.log(
    `\nPlease choose one by typing the number:\n1. Convert currencies` +
      `\n2. Attain buy or sell price of Bitcoin or Ether` +
      `\n3. Get spot price of Bitcoin\n4. Get the current time` +
      `\nAlternatively, enter "n" to exit.`
  );
  let choice = prompt();

  switch (choice) {
    case "n":
      return console.log(`\nThanks for using GitCoin!`);
    case "1":
      console.log(`\ncurrency converted`);
      // await convertCurrency();
      break;
    case "2":
      console.log(`\nbuy or sell price attained`);
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
      return console.log(`\nThanks for using GitCoin!`);
  }
};

console.log(`\nWelcome to GitCoin!\n`);
processRequests();
