"use strict";
export class Libreria {
  //-------------------------------------------------------
  //1- CREAR CONTENEDOR (DIV)
  //-------------------------------------------------------
  static crearContenedor(params) {
    const contenedor = document.createElement("div");
    contenedor.id = params.id;
    contenedor.className = params.id;
    document.querySelector(params.padre).appendChild(contenedor);
    return contenedor;
  }

  //-------------------------------------------------------
  //2- CREAR INPUT
  //-------------------------------------------------------
  static crearInput(tipo, id, placeholder, padre) {
    const input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    input.placeholder = placeholder;
    document.querySelector(padre).appendChild(input);
    return input;
  }

  //-------------------------------------------------------
  //3- CREAR BOTÓN
  //-------------------------------------------------------
  static crearBoton(id, texto, padre) {
    const boton = document.createElement("button");
    boton.id = id;
    boton.className = id;
    boton.textContent = texto;
    document.querySelector(padre).appendChild(boton);
    return boton;
  }

  // ----------------------------------------------------------------------------------
  // Borrar Inputs
  // ----------------------------------------------------------------------------------
  static borrarInputs() {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  }
}
