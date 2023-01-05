import { ChangeEvent, useState } from "react";

import styles from "@/pages/index.module.css";
import { getConvertedValueInRomanNumerals } from "utils/getConvertedValueInRomanNumerals";

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

    const convertedValueInRomanNumerals = getConvertedValueInRomanNumerals(
      +value
    );
    setConvertedValueInRomanNumerals(convertedValueInRomanNumerals);
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputValueChange} />

      {error && <p className={styles.redText}>{error}</p>}

      <p>Your value in Roman Numerals is: {convertedValueInRomanNumerals}</p>
    </>
  );
};
