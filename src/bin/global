#!/usr/bin/env node
import { validateEmail } from '../lib/utils';
import escribir_coco from '../lib/index';
function global() {
  // Elimina argumentos innecesarios
  var args = process.argv.splice(process.execArgv.length + 2);

  // Recibe los parámetros para  escribirlos en el COCO.
  var corto = args[0];
  var organizacion = args[1];
  var email = args[2];

  // Error handling
  if (corto !== 'corto' && corto !== 'largo') {
    console.log(
      '\nERROR: Debes indicar si quieres el código de conducta largo o corto. (coco-gen corto ejemplo hola@hola.com)\n'
    );
    return;
  }

  if (!organizacion) {
    console.log(
      '\nERROR: Debes indicar el nombre de tu organizacion. (coco-gen corto "Nombre de mi organizacion" hola@hola.com)\n'
    );
    return;
  }

  var utils = require('../lib/utils');
  if (validateEmail(email) === false) {
    console.log(
      '\nERROR: Debes indicar un email válido de ayuda y contacto. (coco-gen corto "Nombre de mi organizacion" hola@hola.com)\n'
    );
    return;
  }

  // Displays the text in the console
  escribir_coco(corto === 'corto', organizacion, email);
}

global();
