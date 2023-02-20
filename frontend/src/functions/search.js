// url of api server
const server = "http://127.0.0.1:8000";

// this function should fetch and maybe process the results
const search = (input, setResults, startContext) => {
  console.log("Searching for possible next stops...");
  const lon = input.input.geometry.coordinates[0];
  const lat = input.input.geometry.coordinates[1];
  const { start, setStart } = startContext;

  const url = `${server}/api/search/?loc=${lon},${lat}`;

  // fetch results from server
  // try {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setResults(json);
  //       console.log("Fetched data from server:");
  //       console.log(json);
  //     });
  //   setStart(input.input.geometry.coordinates);
  // } catch (error) {
  //   console.log("Error searching for next stops, ", error);
  // }

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((json) => {
      setResults(json);
      console.log("Fetched data from server:");
      console.log(json);
      setStart(input.input.geometry.coordinates);
    })
    .catch((error) => {
      console.log("Error fetching next stops:", error);
    });
};

export default search;
