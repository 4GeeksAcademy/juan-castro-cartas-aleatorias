import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let numero = document.getElementById("numero")
  let lista = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
  let indiceLista = Math.floor(Math.random() * lista.length)
  let elegido = lista[indiceLista]
  numero.textContent = elegido

  let listapinta = ["♦","♥","♠","♣"]
  let indiceListaPinta = Math.floor(Math.random() * listapinta.length)
  let elegidoPinta = listapinta[indiceListaPinta]
  let pinta1 = document.getElementById("pinta1")
  let pinta2 = document.getElementById("pinta2")
  pinta1.textContent = elegidoPinta
  pinta2.textContent = elegidoPinta

  if (elegidoPinta == "♦" || elegidoPinta == "♥"){
    pinta1.style.color = "red"
    pinta2.style.color = "red"
  } else {
    pinta1.style.color = "black"
    pinta2.style.color = "black"
  } 
};
