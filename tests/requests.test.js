const { expect } = require("chai");
const {
  convertCurrency,
  getBuySell,
  getSpotPrice,
  getTime,
  allCurrencies,
} = require("../src/requests");
const { list } = require("../data/allCurrencies");

describe("allCurrencies()", () => {
  it("should return the list of all world currencies from coinbase", async () => {
    const expected = list();
    // console.log("\n\nEXPECTED\n\n");
    // console.log(expected);
    const actual = await allCurrencies();
    // console.log("\n\nACTUAL\n\n");
    // console.log(actual);
    expect(actual).to.equal(expected);
  });
});
