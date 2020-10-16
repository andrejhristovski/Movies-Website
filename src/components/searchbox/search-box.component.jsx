import React from "react";

import "./search-box.style.css";

const SearchBox = ({ placeholder, handleSubmit }) => (
  <form
    className="form"
    onSubmit={() => {
      return false;
    }}
  >
    <input
      className="form-input"
      type="text"
      placeholder={placeholder}
      onChange={handleSubmit}
    />
  </form>
);

export default SearchBox;
