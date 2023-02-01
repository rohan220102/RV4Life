import * as React from "react";
import { useState, useRef } from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";
import "../css/dateInput.css";
import useInput from "./useInput";
import SearchBar from "./SearchBar";
import Search from "../search";

export default function DateInput({ userInput, setUserInput, setResults }) {
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(false);

  const onFocus = (e) => {
    console.log(e.target.getValue);
    setFocused(true);
    setDate(null);
  };

  const onBlur = () => {
    console.log("The date is " + date);
    console.log(date === null);
    if (date === null) setFocused(false);
  };

  const onSelect = (newValue) => {
    setDate(newValue);
    setFocused(true);
    setUserInput({ input: userInput.input, date: newValue });
    console.log("onSelect");

    // perform search if input location was provided
    if (Object.keys(userInput.input).length !== 0)
      Search(userInput, setResults);
    else {
      // TODO: implement this
      console.log("No user input location");
    }
  };

  return (
    <Wrapper focused={focused}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          tabIndex={-1}
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
            setFocused(true);
          }}
          onAccept={(newValue) => onSelect(newValue)}
          renderInput={({ inputRef, inputProps, InputProps }) => {
            console.log("Rendering input" + inputProps.value);
            return (
              <Box tabIndex={-1} sx={{ display: "flex", alignItems: "center" }}>
                <Input
                  onFocus={(e) => onFocus(e)}
                  onBlur={onBlur}
                  focused={focused}
                  type={"tel"}
                  ref={inputRef}
                  value={
                    date !== null || focused
                      ? inputProps.value
                      : "Select a date"
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (Object.keys(userInput.input).length) {
                        console.log("Searching from DateInput");
                        Search(userInput, setResults);
                        e.target.blur();
                      }
                    }
                  }}
                  onChange={inputProps.onChange}
                />
                {InputProps?.endAdornment}
              </Box>
            );
          }}
        />
      </LocalizationProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 4px;
  margin-top: 0.7em;
  height: 32px;
  position: relative;
  width: 98.95%;
  left: 2px;
  box-sizing: border-box;
  padding: 0;
  padding-right: 10px;
  background: ${(props) => (props.focused ? "white" : "var(--grey)")};
  border-width: 0;
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.focused ? "black" : "var(--darkgrey)")};
  display: grid;
  justify-self: center;
  border-color: blue;
  outline: 2px solid var(--grey);
  border-style: solid;
`;

const Input = styled.input`
  height: 32px;
  position: relative;
  width: 98.95%;
  box-sizing: border-box;
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;
  background: ${(props) => (props.focused ? "white" : "var(--grey)")};
  border-width: 0;
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.focused ? "black" : "var(--darkgrey)")};
  display: grid;
  justify-self: center;
  border-color: blue;
  outline: none;
  border-style: solid;
  border-radius: 4px;
`;
