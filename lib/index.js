// ./lib/index.js
const fs = require('fs');
const coco_corto = require("./coco-corto");
const coco_largo = require("./coco-largo");
const utils = require("./utils");

/**
 * 
 * @param {bolean} corto Define si quiere imprimir un COCO largo o corto
 * @param {string} organizacion Nombre de la organizacion
 * @param {string} email Email de la organizacion
 */
function reemplazar_coco(corto = true, organizacion, email){
    var coco = corto ? coco_corto.coco_corto : coco_largo.coco_largo;
    var ret = utils.utils.replaceAll(coco, utils.utils.organizacion, organizacion)
    ret = utils.utils.replaceAll(ret, utils.utils.email, email)
    return ret.toString();
}

/**
 * 
 * @param {bolean} corto Define si quiere imprimir un COCO largo o corto
 * @param {string} organizacion Nombre de la organizacion
 * @param {string} email Email de la organizacion
 */
function escribir_coco(corto = true, organizacion, email) {
    fs.writeFile(utils.utils.fileName, reemplazar_coco(corto, organizacion, email),function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("");
        console.log("Código de Ética y Conducta creado.");
        console.log("");
    }); 
};

exports.escribir_coco = escribir_coco;