// libraries
import { useState, useContext } from "react";
import styled from "styled-components";

// functions
import Search from "../functions/search";
import useInput from "../functions/useInput";
import { StartContext } from "../App";

// styles
import "../css/inputField.css";

// the input field component
const InputField = ({
  icon,
  placeholder,
  id,
  userInput,
  setUserInput,
  setResults,
}) => {
  const input = useInput(""); // used to track current input field value
  const [focused, setFocused] = useState(false);
  const startContext = useContext(StartContext);

  /***************** Event Callbacks *****************/

  const onFocus = () => setFocused(true); // focus on input field
  const onBlur = (e) => {
    // don't trigger if focus goes to a suggestion
    if (!e.relatedTarget?.classList?.contains("suggestion")) setFocused(false);
  };

  // callback for "ENTER" on input field
  const onEnter = (e) => {
    if (e.type === "keydown" && e.key === "Enter" && input.value !== "") {
      // console.log(input.suggestions[0]);
      if (input.suggestions[0] !== undefined) submit(e, input.suggestions[0]);
    }
  };

  // callback for selecting a suggestion from the dropdown
  const onSelect = (e, suggestion) => {
    if (e.type === "click" || e.key === "Enter") {
      e.stopPropagation(); // prevent the triggering of other events
      submit(e, suggestion);
      setFocused(false);
    }
  };

  // submit input to search function
  const submit = (e, suggestion) => {
    // if no specific date provided, use today
    const date = userInput.date === null ? new Date() : userInput.date;

    const newUserInput = { input: suggestion, date: date };
    setUserInput(newUserInput); // update state

    Search(newUserInput, setResults, startContext); // fetch results

    // update input field to reflect selection
    input.setValue(suggestion.place_name);
    e.target.blur(); // remove focus
  };

  /******************** Rendering ********************/

  return (
    <Wrapper>
      <Input
        onFocus={onFocus}
        onBlur={(e) => onBlur(e)}
        focused={focused}
        showSuggestions={input.suggestions?.length > 0}
        id={id}
        className="input"
        autoFocus
        onKeyDown={onEnter}
        placeholder={placeholder}
        {...input}
        isTyping={input.value !== ""}
      />

      {input.suggestions?.length > 0 && (
        <SuggestionWrapper focused={focused}>
          {input.suggestions.map((suggestion, index) => {
            return (
              <Suggestion
                focused={focused}
                key={index}
                tabIndex={0}
                className="suggestion"
                onClick={(e) => onSelect(e, suggestion)}
                onKeyDown={(e) => onSelect(e, suggestion)}
              >
                {suggestion.place_name}
              </Suggestion>
            );
          })}
        </SuggestionWrapper>
      )}
    </Wrapper>
  );
};

export default InputField;

const Wrapper = styled.div`
  width: 100%;
  padding: 0;
`;

const Icon = styled.img`
  height: 1rem;
  width: 0.8rem;
  background: ${(props) =>
    props.isTyping || props.focused ? "white" : "var(--grey)"};
  position: relative;
  box-sizing: border-box;
  top: 2.22em;
  left: 0.67em;
  z-index: 100;
  transform: translateY(-50%);
`;

const Input = styled.input`
  display: grid;
  justify-self: center;
  width: 98.95%;
  height: 32px;
  background: ${(props) => (props.isTyping ? "white" : "var(--grey)")};
  position: relative;
  left: 2px;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.isTyping ? "black" : "var(--darkgrey)")};
  border-width: 0;
  border-color: blue;
  border-style: solid;
  border-radius: ${(props) =>
    props.isTyping && props.focused && props.showSuggestions
      ? "4px 4px 0px 0px"
      : "4px"};
  outline: 2px solid var(--grey);
`;

const SuggestionWrapper = styled.div`
  display: ${(props) => (props.focused ? "block" : "none")};
  background: white;
  position: absolute;
  width: 91.43%;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: inset -2px 0 0 var(--grey), inset 0 -2px 0 var(--grey),
    inset 2px 0 0 var(--grey), inset 0 2px 0 var(--grey);
`;

const Suggestion = styled.p`
  display: ${(props) => (props.focused ? "block" : "none")};
  cursor: pointer;
  color: black;
  font-size: 13px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 12px 10px 12px;
  position: relative;
`;
