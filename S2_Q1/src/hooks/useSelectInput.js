import { useState } from "react";

const useSelectInput = ({ defaultValue = "" }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectChange = (event) => {
    const value = event.target.value;

    setSelectedValue(value);
  };

  return { selectedValue, handleSelectChange };
};

export default useSelectInput;
