import "../css/searchBar.css";
import InputField from "./InputField";
import DateInput from "./DateInput";

const SearchBar = ({ icon, handleChange, onEnterSelect }) => {
  return (
    <>
      <InputField
        autofocus
        icon={icon}
        id="start-input"
        placeholder="Enter a starting location"
        onChange={handleChange}
        onEnterSelect={onEnterSelect}
      />
      <DateInput tabIndex={-1} onEnterSelect={onEnterSelect}></DateInput>
    </>
  );
};

export default SearchBar;
