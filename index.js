// index.js

//1. Seleccion
const paragraph = document.getElementById("paragraph")
const links = document.getElementsByClassName("link")
const divs=document.getElementsByTagName("div")
const title = document.getElementById("title")

const h2Tag = document.createElement("h2")
let parent = document.getElementsByTagName("body")[0]




console.log(paragraph)
console.log(links)
console.log(divs)

//2. Manipulacion
const attribute = paragraph.getAttribute("id")
const secondAttribute = document.getElementById("add-item-button").getAttribute("id")

paragraph.setAttribute("id","info-paragraph")
title.setAttribute("id","info-title")

h2Tag.innerHTML = "Elephant"

console.log(h2Tag)

parent.appendChild(h2Tag)

console.log(parent)
