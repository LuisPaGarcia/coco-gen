// ./lib/index.js
import fs from 'fs';
import { replaceAll, organizacion, email, fileName } from './utils';
import coco_corto from './coco-corto';
import coco_largo from './coco-largo';

/**
 *
 * @param {bolean} corto Define si quiere imprimir un COCO largo o corto
 * @param {string} organizacionParam Nombre de la organizacion
 * @param {string} emailParam Email de la organizacion
 */
function reemplazar_coco(corto = true, organizacionParam, emailParam) {
  var coco = corto ? coco_corto : coco_largo;
  var ret = replaceAll(coco, organizacion, organizacionParam);
  ret = replaceAll(ret, email, emailParam);
  return ret.toString();
}

/**
 *
 * @param {bolean} corto Define si quiere imprimir un COCO largo o corto
 * @param {string} organizacionParam Nombre de la organizacion
 * @param {string} emailParam Email de la organizacion
 */
function escribir_coco(corto = true, organizacionParam, emailParam) {
  fs.writeFile(
    fileName,
    reemplazar_coco(corto, organizacionParam, emailParam),
    function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('\nCódigo de Ética y Conducta creado.\n');
    }
  );
}

export default escribir_coco;
