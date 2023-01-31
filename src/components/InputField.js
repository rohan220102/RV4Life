import { useState } from "react";
import styled from "styled-components";
import "../css/InputField.css";
import useInput from "./useInput.js";

const InputField = ({ icon, placeholder, onChange, onEnterSelect, id }) => {
  const input = useInput("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <Wrapper>
      <Input
        onFocus={onFocus}
        onBlur={onBlur}
        focused={focused}
        showSuggestions={input.suggestions?.length > 0}
        id={id}
        className="input"
        onChange={onChange}
        onKeyDown={onEnterSelect}
        placeholder={placeholder}
        {...input}
        isTyping={input.value !== ""}
      />

      {input.suggestions?.length > 0 && (
        <SuggestionWrapper>
          {input.suggestions.map((suggestion, index) => {
            return (
              <Suggestion
                key={index}
                onClick={(e) => {
                  e.stopPropagation(); // prevent selectCard() from calling
                  input.setValue(suggestion.place_name);
                  input.setSuggestions([]);
                  onEnterSelect(e);
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
  border-radius: 4px;
  height: 32px;
  position: relative;
  width: 98.95%;
  box-sizing: border-box;
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;
  left: 2px;
  background: ${(props) => (props.isTyping ? "white" : "var(--grey)")};
  border-width: 0;
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.isTyping ? "black" : "var(--darkgrey)")};
  display: grid;
  justify-self: center;
  border-color: blue;
  outline: 2px solid var(--grey);
  border-style: solid;
  border-radius: ${(props) =>
    props.isTyping &&
    props.focused &&
    props.showSuggestions &&
    "4px 4px 0px 0px"};
`;

const SuggestionWrapper = styled.div`
  background: white;
  position: absolute;
  width: 91.5%;
  box-sizing: border-box;
  padding: 15px 20px;
  border-radius: 0px 0px 10px 10px;
  z-index: 100;
  box-shadow: inset -2px 0 0 var(--grey), inset 0 -2px 0 var(--grey),
    inset 2px 0 0 var(--grey), inset 0 2px 0 var(--grey);
`;

const Suggestion = styled.p`
  cursor: pointer;
  width: 100%;
`;
