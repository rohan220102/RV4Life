import Results from './results';
import getResults from './getResults'
      
export default function search(setGeojson) {
  const results = document.getElementById("results"); 
  const start = document.getElementById("start-input").value;
  const end = document.getElementById("end-input").value;

  var str = 'Searching for best places to stop along the route from ' + start + " to " + end + "...";
  console.log(str);
  results.innerHTML = str;

  const geojson = getResults();

  setGeojson(geojson);
};