import { useState } from "react";
import styled from "styled-components";
import '../css/InputField.css'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    setValue(event.target.value);

    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig`;
      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error) {
      console.log("Error fetching data, ", error);
    }
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions
  };
};

const InputField = ({icon, placeholder, onChange, onKeyDown, id}) => {
  const input = useInput("");
  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return (
    <Wrapper>
      <Icon src={icon} focused={focused} tabIndex={-1} id="icon"/>
      <Input
        onFocus={onFocus}
        onBlur={onBlur}
        focused={focused}
        showSuggestions={input.suggestions?.length > 0}
        id={id} className="input"
        onChange={onChange} onKeyDown={onKeyDown}
        placeholder={placeholder}
        {...input}
        isTyping={input.value !== ""}
      />

      {(input.suggestions?.length > 0)  && (
        <SuggestionWrapper>
          {input.suggestions.map((suggestion, index) => {
            return (
              <Suggestion
                key={index}
                onClick={(e) => {
                  e.stopPropagation(); // prevent selectCard() from calling
                  input.setValue(suggestion.place_name);
                  input.setSuggestions([]);
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
  margin-top: 1em;
  width: 100%;
  padding: 0;
`

const Icon = styled.img`
  height: 1rem;
  width: 0.8rem;
  background: ${(props) => props.focused ? "white" : "var(--grey)"};
  position: absolute;
  box-sizing: border-box;
  top: 5.73em;
  left: 2em;
  z-index:100;
  transform: translateY(-50%);
`;

const Input = styled.input`
  border-radius: 4px;
  height: 32px;
  position: relative;
  width: 98.95%;
  box-sizing: border-box;
  padding: 0;
  padding-left: 28px;
  padding-right: 10px;
  left: 2px;
  background: var(--grey);
  border-width: 0;
  font-size: 13px;
  font-weight: bold;
  color: var(--darkgrey);
  display: grid;
  justify-self: center;
  border-color: blue; 
  outline: 2px solid var(--grey);
  border-style: solid;
  border-radius: ${(props) => props.isTyping && props.focused && props.showSuggestions && "4px 4px 0px 0px"};
`;

const SuggestionWrapper = styled.div`
  background: white;
  position: absolute;
  width: 88%;
  box-sizing: border-box;
  padding: 15px 20px;
  border-radius: 0px 0px 10px 10px;
  z-index: 100;
  box-shadow: inset -2px 0 0 var(--grey), inset 0 -2px 0 var(--grey), inset 2px 0 0 var(--grey), inset 0 2px 0 var(--grey);
`;

const Suggestion = styled.p`
  cursor: pointer;
  width: 100%;
`;
