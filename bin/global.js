#!/usr/bin/env node

// Elimina argumentos innecesarios
var args = process.argv.splice(process.execArgv.length + 2);

// Recibe los parámetros para  escribirlos en el COCO.
var corto = args[0];
var organizacion = args[1];
var email = args[2];

// Error handling
if(corto !== "corto" && corto !== "largo"){
    console.log("")
    console.log("ERROR: Debes indicar si quieres el código de conducta largo o corto. (coco-gen corto ejemplo hola@hola.com)")
    console.log("")
    return;
}

if(!organizacion){
    console.log("")
    console.log("ERROR: Debes indicar el nombre de tu organizacion. (coco-gen corto \"Nombre de mi organizacion\" hola@hola.com)")
    console.log("")
    return;
}

var utils = require("../lib/utils")
if(utils.utils.validateEmail(email) === false){
    console.log("")
    console.log("ERROR: Debes indicar un email válido de ayuda y contacto. (coco-gen corto \"Nombre de mi organizacion\" hola@hola.com)")
    console.log("")
    return;
}

var coco = require('../lib/index.js');

// Displays the text in the console
coco.escribir_coco(corto === "corto", organizacion, email)