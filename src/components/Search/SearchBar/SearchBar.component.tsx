import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./searchbar.scss";

interface SearchBarProps {
  handleSearch: (value: string) => void;
}

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleChange = (value: string) => {
    setInput(value);

    handleSearch(value.toLowerCase());
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch id="search-icon" />
    </div>
  );
};
