"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _fs=_interopRequireDefault(require("fs")),_utils=require("./utils"),_cocoCorto=_interopRequireDefault(require("./coco-corto")),_cocoLargo=_interopRequireDefault(require("./coco-largo"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}// ./lib/index.js
/**
 *
 * @param {bolean} corto Define si quiere imprimir un COCO largo o corto
 * @param {string} organizacionParam Nombre de la organizacion
 * @param {string} emailParam Email de la organizacion
 */function reemplazar_coco(){var a=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],b=1<arguments.length?arguments[1]:void 0,c=2<arguments.length?arguments[2]:void 0,d=a?_cocoCorto["default"]:_cocoLargo["default"],e=(0,_utils.replaceAll)(d,_utils.organizacion,b);return e=(0,_utils.replaceAll)(e,_utils.email,c),e.toString()}/**
 *
 * @param {bolean} corto Define si quiere imprimir un COCO largo o corto
 * @param {string} organizacionParam Nombre de la organizacion
 * @param {string} emailParam Email de la organizacion
 */function escribir_coco(){var a=!(0<arguments.length&&arguments[0]!==void 0)||arguments[0],b=1<arguments.length?arguments[1]:void 0,c=2<arguments.length?arguments[2]:void 0;_fs["default"].writeFile(_utils.fileName,reemplazar_coco(a,b,c),function(a){return a?console.log(a):void console.log("\nC\xF3digo de \xC9tica y Conducta creado.\n")})}var _default=escribir_coco;exports["default"]=_default;