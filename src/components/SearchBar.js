import "../css/searchBar.css";
import InputField from "./InputField";
import DateInput from "./DateInput";
import PinIcon from "../media/pin1.png";

const SearchBar = ({ userInput, setUserInput, setResults, setMessage }) => {
  return (
    <div id="searchbar">
      <InputField
        autofocus
        icon={PinIcon}
        id="start-input"
        placeholder="Enter a starting location"
        userInput={userInput}
        setUserInput={setUserInput}
        setResults={setResults}
        setMessage={setMessage}
      />
      <DateInput
        tabIndex={-1}
        userInput={userInput}
        setUserInput={setUserInput}
        setResults={setResults}
        setMessage={setMessage}
      ></DateInput>
    </div>
  );
};

export default SearchBar;
