import "@testing-library/jest-dom";
import { getConvertedValueInRomanNumerals } from "../utils/getConvertedValueInRomanNumerals";

describe("getConvertedValueInRomanNumerals", () => {
  it("should return correct value for inputValue of 998", () => {
    const value = 998;

    const result = getConvertedValueInRomanNumerals(value);

    expect(result).toBe("CMXCVIII");
  });

  it("should return correct value for inputValue of 1", () => {
    const value = 1;

    const result = getConvertedValueInRomanNumerals(value);

    expect(result).toBe("I");
  });
});
