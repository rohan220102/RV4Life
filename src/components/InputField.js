import { useState } from "react";
import styled from "styled-components";
import Search from "../search";
import useInput from "./useInput.js";
import "../css/inputField.css";

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

  /***************** Event Callbacks *****************/

  const onFocus = () => setFocused(true);
  const onBlur = (e) => {
    // don't trigger if focus goes to a suggestion
    if (!e.relatedTarget?.classList?.contains("suggestion")) setFocused(false);
  };

  // callback for "ENTER" on input field
  const onEnter = (e) => {
    if (e.type === "keydown" && e.key === "Enter" && input.value !== "") {
      console.log(input.suggestions[0]);
      if (input.suggestions[0] !== undefined) submit(e, input.suggestions[0]);
    }
  };

  const onSelect = (e, suggestion) => {
    if (e.type === "click" || e.key === "Enter") {
      e.stopPropagation(); // prevent the triggering of other events
      submit(e, suggestion);
      setFocused(false);
    }
  };

  const submit = (e, suggestion) => {
    // if no specific date provided, use today
    const date = userInput.date === null ? new Date() : userInput.date;

    // update state
    const newUserInput = { input: suggestion, date: date };
    setUserInput(newUserInput);

    Search(newUserInput, setResults); // fetch results

    // update inputfield
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
  color: var(--darkgrey);
  box-sizing: border-box;
  width: 100%;
  padding: 6px 10px;
  position: relative;
`;
