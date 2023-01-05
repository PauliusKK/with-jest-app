export const RomanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export const getConvertedValueInRomanNumerals = (inputValue: number) => {
  let romanNumbersToReturn = "";
  let valueLeftToConvert = inputValue;

  Object.keys(RomanNumerals).forEach((key) => {
    const keyValue = RomanNumerals[key as keyof typeof RomanNumerals]; // really hate this type but nothing else worked.

    while (valueLeftToConvert >= keyValue) {
      romanNumbersToReturn += key;
      valueLeftToConvert -= keyValue;
    }
  });

  return romanNumbersToReturn;
};
