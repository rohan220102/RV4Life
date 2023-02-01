import { useState } from "react";
import styled from "styled-components";
import "../css/InputField.css";
import useInput from "./useInput.js";
import Search from "../search";
import dayjs from "dayjs";

const InputField = ({
  icon,
  placeholder,
  id,
  userInput,
  setUserInput,
  setResults,
}) => {
  const input = useInput("");
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = (e) => {
    if (!e.relatedTarget?.classList?.contains("suggestion")) setFocused(false);
  };

  const submit = (e, suggestion) => {
    // if no specific date provided, use today
    const date = userInput.date === "" ? new Date() : userInput.date;
    const newUserInput = { input: suggestion, date: date };

    setUserInput(newUserInput); // update state
    Search(newUserInput, setResults); // fetch results

    input.setValue(suggestion.place_name); // update inputfield
    e.target.blur();
  };

  const onEnter = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      console.log(input.suggestions[0]);
      if (input.suggestions[0] !== undefined) submit(e, input.suggestions[0]);
    }
  };

  const onClick = (e, suggestion) => {
    console.log(userInput.date);
    e.stopPropagation(); // prevent selectCard() from calling
    submit(e, suggestion);
    setFocused(false);
  };

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
                onClick={(e) => onClick(e, suggestion)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onClick(e, suggestion);
                  }
                }}
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
