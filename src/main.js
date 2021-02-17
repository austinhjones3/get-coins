const axios = require("axios");
const prompt = require("prompt-sync")();
const {} = require("./requests");
const BASE = `https://api.coinbase.com/v2`;

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
      return "Thanks for using GitCoin.";
    case "1":
      console.log("\ncurrency converted\n");
      // await convertCurrency();
      break;
    case "2":
      console.log("\nbuy or sell price attained\n");
      // await getBuySell();
      break;
    case "3":
      console.log("\nspot price attained\n");
      // await getSpotPrice();
      break;
    case "4":
      console.log("\ntime acquired\n");
      // await getTime();
      break;
  }

  console.log("Do you want to make another request to coinbase? (y/n)");
  choice = prompt();
  if (choice === "n") return "Thanks for using GitCoin!";
  return processRequests();
};

console.log(`\nWelcome to GitCoin!`);
processRequests();
