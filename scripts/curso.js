"use strict";

export default class Curso {
  constructor(nombre, poster, clases, titular) {
    this.nombre = nombre;
    this.poster = poster;
    this.clases = clases;
    this.titular = titular;
    // this.alumnos = alumnos;
  }

  mostrarNombre() {
    return this.nombre;
  }
  mostrarPoster() {
    return this.poster;
  }
  mostrarClases() {
    return this.clases;
  }
  mostrarTitular() {
    return this.titular;
  }

  cambiarNombre(nombre) {
    this.nombre = nombre;
  }
  cambiarPoster(poster) {
    this.poster = poster;
  }
  cambiarClases(clases) {
    this.clases = clases;
  }
  cambiarTitular(titular) {
    this.titular = titular;
  }
}
