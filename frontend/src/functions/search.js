// url of api server
const server = "http://127.0.0.1:8000";

// this function should fetch and maybe process the results
const search = (input, setResults, startContext) => {
  console.log("Searching for possible next stops...");
  const lon = input.input.geometry.coordinates[0];
  const lat = input.input.geometry.coordinates[1];
  const { start, setStart } = startContext;

  setStart(input.input.geometry.coordinates);
  // setStart([-77.068444, 38.909664]);

  // fetch results from server
  const url = `${server}/api/search/?loc=${lon},${lat}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setResults(json);
      console.log("Fetched data from server:");
      console.log(json);
    });
};

export default search;
