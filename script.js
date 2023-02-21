"use strict";

const div = document.createElement("div");
const container = document.createElement("div");
const body = document.querySelector("body");

div.setAttribute("id", "square");

//make all of our div variables have a unique id
//make the container variable have a css attribute of CSS display: flex

for (let i = 0; i < 16; i++) {
  let container = document.createElement("div");
  container.setAttribute("id", i);
  container.classList.add("row");
  container.setAttribute("style", "display:flex");
  body.appendChild(container);
  for (let x = 0; x < 16; x++) {
    let div = document.createElement("div");
    div.setAttribute("id", i, x);
    div.setAttribute("id", "square");
    div.style.backgroundColor = "red";
    div.style.margin = "5px";
    container.appendChild(div);
  }
}
