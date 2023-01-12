"use strict";

export default class Usuario {
  constructor(nombres, apellido, email) {
    this.nombres = nombres;
    this.apellido = apellido;
    this.email = email;
  }

  mostrarNombre() {
    return this.nombres;
  }
  mostrarApellido() {
    return this.apellido;
  }
  mostrarEmail() {
    return this.email;
  }

  cambiarNombre(nombres) {
    this.nombrs = nombres;
  }
  cambiarApellido(apellido) {
    this.apellido = apellido;
  }
  cambiarEmail(email) {
    this.email = email;
  }
}
