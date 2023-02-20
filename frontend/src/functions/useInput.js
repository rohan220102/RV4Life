// libraries
import { useState } from "react";

// helper function to get suggestions
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    setValue(event.target.value);
    const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoicXV5bmgxNiIsImEiOiJjbGI3anljd2QwYno1M3ZtcjhmeWwxNzk0In0.F6D6mGrZ1-0tjVTDPiMgig`;

    try {
      const response = await fetch(endpoint);
      const json = await response.json();
      if (json) setSuggestions(json?.features);
    } catch (error) {
      console.log("Error getting suggestions:", error);
    }
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions,
  };
};

export default useInput;
