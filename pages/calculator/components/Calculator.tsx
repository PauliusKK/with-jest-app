import { ChangeEvent, useState } from "react";

import styles from "@/pages/index.module.css";

const RomanNumerals = {
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

export const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [convertedValueInRomanNumerals, setConvertedValueInRomanNumerals] =
    useState("");
  const [error, setError] = useState("");

  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    setConvertedValueInRomanNumerals("");

    if (value.includes(".") || value.includes(",")) {
      return setError("Value should not have decimals");
    }

    if (+value < 1) {
      return setError("Value is too low, must be at least 1");
    }

    if (+value > 1000) {
      return setError("Value is too high, must not be higher than 1000");
    }

    setError("");
    getConvertedValueInRomanNumerals(+value);
  };

  const getConvertedValueInRomanNumerals = (inputValue: number) => {
    let romanNumbersToReturn = "";
    let valueLeftToConvert = inputValue;

    Object.keys(RomanNumerals).forEach((key) => {
      const keyValue = RomanNumerals[key as keyof typeof RomanNumerals]; // really hate this type but nothing else worked.

      while (valueLeftToConvert >= keyValue) {
        romanNumbersToReturn += key;
        valueLeftToConvert -= keyValue;
      }
    });

    return setConvertedValueInRomanNumerals(romanNumbersToReturn);
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputValueChange} />

      {error && <p className={styles.redText}>{error}</p>}

      <p>Your value in Roman Numerals is: {convertedValueInRomanNumerals}</p>
    </>
  );
};
