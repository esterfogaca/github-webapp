import React, { useRef } from "react";

const SearchBox = ({
  placeholder = "Type the username",
  submit = "Send",
  handleSearch = null,
}) => {
  const inputEl = useRef(null);

  const handleClick = () => {
    handleSearch(inputEl.current.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleSearch(inputEl.current.value);
  };

  return (
    <div className="searchbox">
      <input
        ref={inputEl}
        type="text"
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>{submit}</button>
    </div>
  );
};

export default SearchBox;
