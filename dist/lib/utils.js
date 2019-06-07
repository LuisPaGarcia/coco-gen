"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateEmail=validateEmail,exports.fileName=exports.email=exports.organizacion=exports.replaceAll=void 0;var organizacion="NAMENAMENAME";exports.organizacion="NAMENAMENAME";var email="EMAILEMAILEMAIL";exports.email="EMAILEMAILEMAIL";var fileName="CODIGO_DE_CONDUCTA_Y_ETICA.md";/**
 *
 * @param {string} text Texto origen
 * @param {string} search Charset que buscaremos
 * @param {string} replacement Charset que reemplazaremos
 */exports.fileName="CODIGO_DE_CONDUCTA_Y_ETICA.md";var replaceAll=function(a,b,c){var d=a.toString();return d.replace(new RegExp(b,"g"),c)};/**
 *
 * @param {string} email Email valido
 */exports.replaceAll=replaceAll;function validateEmail(a){var b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test((a+"").toLowerCase())}