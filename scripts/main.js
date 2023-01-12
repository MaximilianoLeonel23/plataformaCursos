"use strict";

import Curso from "./curso.js";
import Usuario from "./usuario.js";

const cursos = [];
const cardContainer = document.querySelector(".cards-container");

const formularioCurso = document.getElementById("formulario-curso");

formularioCurso.addEventListener("submit", (e) => {
  e.preventDefault();
  // Obtener los datos del formulario
  const currForm = e.target;
  const currNombre = e.target.nombre.value;
  const currPoster = e.target.poster.value;
  const currClases = e.target.clases.value;
  const currTitular = e.target.titular.value;
  // Crear un nuevo curso
  const curso = new Curso(currNombre, currPoster, currClases, currTitular);
  cursos.push(curso);
  console.log(cursos);
  // Crear una tarjeta a partir del curso
  const card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);
  card.innerHTML = `<div class="card-poster">
  <img src="${curso.mostrarPoster()}" alt="" />
  </div>
  <div class="card-description">
  <p class="card-title">${curso.mostrarNombre()}</p>
  <span class="card-titular">${curso.mostrarTitular()}</span>
  <span class="card-classes">${curso.mostrarClases()} clases</span>
  </div>`;
  console.log(curso);
});

// Registrar usuarios

// Clases para alumno y profesor

class Alumno extends Usuario {
  constructor(nombres, apellido, email, alumno) {
    super(nombres, apellido, email);
    this.alumno = alumno;
  }

  mostrarAlumno() {
    return this.alumno;
  }
  cambiarAlumno(alumno) {
    this.alumno = alumno;
  }
}

class Profesor extends Usuario {
  constructor(nombres, apellido, email, profesor) {
    super(nombres, apellido, email);
    this.profesor = profesor;
  }

  mostrarProfesor() {
    return this.profesor;
  }
  cambiarProfesor(profesor) {
    this.profesor = profesor;
  }
}

// Formulario para usuarios

const formularioUsuario = document.getElementById("formulario-usuario");

// Lista de profesores y de alumnos

const alumnos = [];
const profesores = [];
formularioUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  // Datos del formulario
  const currForm = e.target;
  const currNombres = e.target.nombres.value;
  const currApellido = e.target.apellido.value;
  const currEmail = e.target.email.value;
  const currUsuarioAlumno = e.target.alumno.checked;
  const currUsuarioProfesor = e.target.profesor.checked;
  // Crear un alumno o un profesor

  if (currUsuarioAlumno && !currUsuarioProfesor) {
    const alumno = new Alumno(
      currNombres,
      currApellido,
      currEmail,
      currUsuarioAlumno
    );
    alumnos.push(alumno);
    console.log(alumnos);
  } else if (currUsuarioProfesor && !currUsuarioAlumno) {
    const profesor = new Profesor(
      currNombres,
      currApellido,
      currEmail,
      currUsuarioProfesor
    );
    profesores.push(profesor);
    console.log(profesores);
  } else if (currUsuarioAlumno && currUsuarioProfesor) {
    // Mostrar una alerta en el form
    alert("Elija una sola opción: alumno/a o profesor/a");
  } else if (!currUsuarioAlumno && !currUsuarioProfesor) {
    // Mostrar una alerta en el form
    alert("Elija alguna opción");
  }
});
