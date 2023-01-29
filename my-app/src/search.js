import Results from './results';
import getResults from './getResults'
      
export default function search(setGeojson) {
  const results = document.getElementById("results"); 
  const start = document.getElementById("start-input").value;

  var str = 'Searching for best places to stop along the route from ' + start;
  console.log(str);
  results.innerHTML = str;

  const geojson = getResults();

  setGeojson(geojson);
};