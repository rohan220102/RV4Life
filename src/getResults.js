export default function getResults(input) {
  console.log("Getting predictions and generating cards...");

  const output = infer(input);

  return (
    [
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: true, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},

      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: true, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},

      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: true, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'},
      {selected: false, title:output, rating:'4.8', detour:'6 min.',visited:'251', temp:'64'}
    ]
  );
}

function infer(input) {
  return input.toUpperCase();
}

