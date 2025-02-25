"use strict";
import { Libreria } from "./libreria.js";
// -------------------------------------------
// CREACION DE ELEMENTOS
// -------------------------------------------
// Contenedor General
Libreria.crearContenedor("formulario", "body");

// Input para el nombre
Libreria.crearInput('text', 'inputNombre', 'Nombre', '#formulario');

// Input para Apellido  
Libreria.crearInput('text', 'inputApellido', 'Apellido', '#formulario');

// Input Para la Edad
Libreria.crearInput('number', 'inputEdad', 'Edad', '#formulario');

// Input para la Contraseña
Libreria.crearInput('password', 'inputPassword', 'Contraseña', '#formulario');

// Botón de Envío
Libreria.crearBoton('btnEnviar', 'Enviar', '#formulario');

// -------------------------------------------
// REFERENCIAS DEL DOM
// -------------------------------------------
const getEl = (id) => document.getElementById(id);
const formulario = getEl("formulario");
const inputNombre = getEl('inputNombre');
const inputApellido = getEl('inputApellido');
const inputEdad = getEl('inputEdad');
const inputPassword = getEl('inputPassword');
const btnEnviar = getEl('btnEnviar');

// -------------------------------------------
// PROGRAMA PRINCIPAL
// -------------------------------------------

btnEnviar.addEventListener('click', ()=>{
  alert(
  `
  Nombre: ${inputNombre.value} 
  Apellido: ${inputApellido.value}
  Edad: ${inputEdad.value}
  Contraseña: ${inputPassword.value}
  `);
})