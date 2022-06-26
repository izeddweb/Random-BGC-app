//                set var
const myBtn = document.querySelector(".btn");
const myDiv = document.querySelector(".hex_div");
const mybody = document.querySelector("body");

//                event

let hexKey = '';
myBtn.onclick = function () {
  hexKey = ` #${Math.random().toString(16).slice(2, 8)} `
  mybody.style.backgroundColor = hexKey;
  myDiv.innerHTML = hexKey;
};

console.log();
