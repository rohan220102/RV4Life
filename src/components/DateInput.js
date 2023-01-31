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

export default function DateInput() {
  const [value, setValue] = React.useState();
  const input = useInput("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <Wrapper focused={focused} isTyping={input.value !== ""}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Enter a day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Input
                placeholder="Select a departure date"
                onFocus={onFocus}
                onBlur={onBlur}
                focused={focused}
                ref={inputRef}
                inputProps={{
                  ...inputProps,
                  placeholder: "tt.mm.jjjj",
                }}
              />
              {InputProps?.endAdornment}
            </Box>
          )}
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
