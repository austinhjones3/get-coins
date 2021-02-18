const { expect } = require("chai");
const {
  getExchangeRates,
  getBuySell,
  getSpotPrice,
  getTime,
  allCurrencies,
} = require("../src/requests");
const { list } = require("../test-data/allCurrencies");

describe("allCurrencies()", () => {
  it("should return the list of all world currencies from coinbase", async () => {
    const expected = list();
    const actual = await allCurrencies();
    expect(actual).to.equal(expected);
  });
});
