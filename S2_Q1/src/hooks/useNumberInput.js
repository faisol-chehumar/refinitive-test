import { useState } from "react";

const useNumberInput = () => {
  const [numberValue, setNumberValue] = useState(0);

  const handleNumberChange = (event) => {
    const value = event.target.value;

    if (value === "") {
      return setNumberValue("");
    }

    if (isNegativeNumber(value)) {
      return setNumberValue(1);
    }

    const roundedNumber = roundToNearestInteger(value);
    return setNumberValue(roundedNumber);
  };

  const roundToNearestInteger = (number) => {
    return Math.round(number);
  };

  const isNegativeNumber = (number) => {
    return number < 0;
  };

  return {
    numberValue,
    handleNumberChange,
  };
};

export default useNumberInput;
