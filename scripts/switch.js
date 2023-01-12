"use strict";

const switchForm = document.querySelector(".form-switch");
const switchBtn = document.querySelector(".form-switch-btn");
const switchCircle = document.querySelector(".form-circle");
const submitBtn = document.getElementById("submit-btn");
let currCurso = true;
let usuario = false;

// const changeSubmitBtn = function() {
//     if(curso) {
//         submitBtn.classList.remove("color-primary-btn")
//         submitBtn.classList.add("color-secondary-btn")
//         submitBtn.textContent = "Registrate";
//     } else {
//         submitBtn.classList.add("color-primary-btn")
//         submitBtn.classList.remove("color-secondary-btn")
//         submitBtn.textContent = "Agrega tu curso";
//     }
// }
const cursoForm = document.getElementById("formulario-curso");
const usuarioForm = document.getElementById("formulario-usuario");

const showForm = function () {
  if (currCurso) {
    cursoForm.classList.toggle("hidden");
    usuarioForm.classList.toggle("hidden");
  } else {
    cursoForm.classList.toggle("hidden");
    usuarioForm.classList.toggle("hidden");
  }
};

const switchBtnStyle = function () {
  if (currCurso) {
    switchBtn.style.order = "1";
    switchCircle.style.order = "2";
    switchCircle.style.backgroundColor = "#fec180";
    switchBtn.textContent = "Usuario";
  } else {
    switchBtn.style.order = "2";
    switchCircle.style.order = "1";
    switchCircle.style.backgroundColor = "#ff8993";
    switchBtn.textContent = "Curso";
  }
};

switchForm.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target) return;
  // changeSubmitBtn();
  showForm();
  switchBtnStyle(); 
  if (currCurso) {
    currCurso = false
    usuario = true
  } else {
    currCurso = true
    usuario = false
  }
});
