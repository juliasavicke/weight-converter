"use strict";
console.log("main.js");

document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function (event) {
  document.getElementById("output").style.visibility = "visible";

  let lbs = event.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});
