import "../css/searchBar.css";
import InputField from "./InputField";
import styled from "styled-components";

const SearchBar = ({ icon, handleChange, onEnterSelect }) => {
  return (
    <InputField
      autofocus
      icon={icon}
      id="start-input"
      placeholder="Enter a starting location"
      onChange={handleChange}
      onEnterSelect={onEnterSelect}
    />
  );
};

export default SearchBar;
