const lobo = document.querySelector(".imgs");
const oveja1 = document.querySelectorAll(".imgs")[1];
const oveja2 = document.querySelectorAll(".imgs")[2];
const oveja3 = document.querySelectorAll(".imgs")[3];
const oveja4 = document.querySelectorAll(".imgs")[4];
const oveja5 = document.querySelectorAll(".imgs")[5];

let posX = Math.round(Math.random() * 680);
let posY = Math.round(Math.random() * 480);
let puntos = document.querySelectorAll("h2")[0];
let num = 0;
const win = document.querySelector(".win");
let tiempo = document.querySelectorAll("h2")[1];
let segundos = 30;
const perder = document.querySelector(".perder");
const instrucciones = document.querySelector(".instrucciones");
const boton = document.querySelector(".btnPlay");

let intervalo;
let interTiempo;

function mover() {
  posX = Math.round(Math.random() * 600);
  posY = Math.round(Math.random() * 400);
  lobo.style.left = posX + "px";
  lobo.style.top = posY + "px";
  lobo.setAttribute("src", "img/lobo.png");
  oveja1.style.left = Math.round(Math.random() * 600) + "px";
  oveja1.style.top = Math.round(Math.random() * 400) + "px";
  oveja2.style.left = Math.round(Math.random() * 600) + "px";
  oveja2.style.top = Math.round(Math.random() * 400) + "px";
  oveja3.style.left = Math.round(Math.random() * 600) + "px";
  oveja3.style.top = Math.round(Math.random() * 400) + "px";
  oveja4.style.left = Math.round(Math.random() * 600) + "px";
  oveja4.style.top = Math.round(Math.random() * 400) + "px";
  oveja5.style.left = Math.round(Math.random() * 600) + "px";
  oveja5.style.top = Math.round(Math.random() * 400) + "px";
}

function clickLobo() {
  num++;
  puntos.innerText = num;
  if (num >= 3) {
    win.style.display = "block";
    clearInterval(intervalo);
    clearInterval(interTiempo);
  }
}

function clickoveja() {
  perder.style.display = "block";
  clearInterval(intervalo);
  clearInterval(interTiempo);
}

function pasar() {
  segundos--;
  tiempo.innerText = segundos;
  if (segundos <= 0) {
    perder.style.display = "block";
    clearInterval(intervalo);
    clearInterval(interTiempo);
  }
}

function dificultad() {
  clearInterval(intervalo);
  intervalo = setInterval(mover, 700);
  lobo.removeEventListener("mouseover", dificultad);
}

boton.addEventListener("click", empezar);
function empezar() {
  instrucciones.style.display = "none";
  intervalo = setInterval(mover, 1000);
  interTiempo = setInterval(pasar, 1000);
  lobo.addEventListener("click", clickLobo);
  oveja1.addEventListener("click", clickoveja);
  oveja2.addEventListener("click", clickoveja);
  oveja3.addEventListener("click", clickoveja);
  oveja4.addEventListener("click", clickoveja);
  oveja5.addEventListener("click", clickoveja);
  lobo.addEventListener("mouseover", dificultad);


  posX = Math.round(Math.random() * 600);
  posY = Math.round(Math.random() * 400);
  lobo.style.left = posX + "px";
  lobo.style.top = posY + "px";
  lobo.setAttribute("src", "img/lobo.png");
  oveja1.style.left = Math.round(Math.random() * 600) + "px";
  oveja1.style.top = Math.round(Math.random() * 400) + "px";
  oveja2.style.left = Math.round(Math.random() * 600) + "px";
  oveja2.style.top = Math.round(Math.random() * 400) + "px";
  oveja3.style.left = Math.round(Math.random() * 600) + "px";
  oveja3.style.top = Math.round(Math.random() * 400) + "px";
  oveja4.style.left = Math.round(Math.random() * 600) + "px";
  oveja4.style.top = Math.round(Math.random() * 400) + "px";
  oveja5.style.left = Math.round(Math.random() * 600) + "px";
  oveja5.style.top = Math.round(Math.random() * 400) + "px";
}
