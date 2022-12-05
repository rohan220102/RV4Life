import React, { useRef, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Results from './results';
      
export default function search() {
  const results = document.getElementById("results"); 
  const start = document.getElementById("start-input").value;
  const end = document.getElementById("end-input").value;
  var str = 'Searching for best places to stop along the route from ' + start + " to " + end + "...";
  console.log(str);
  results.innerHTML = str;
  //render(<Results/>, rootElement);
};