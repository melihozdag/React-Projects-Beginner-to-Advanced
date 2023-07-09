import React, { useState } from "react";

export const SearchInput = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <input
      type="search"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
};
