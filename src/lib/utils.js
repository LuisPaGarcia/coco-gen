const organizacion = 'NAMENAMENAME';
const email = 'EMAILEMAILEMAIL';
const fileName = 'CODIGO_DE_CONDUCTA_Y_ETICA.md';
/**
 *
 * @param {string} text Texto origen
 * @param {string} search Charset que buscaremos
 * @param {string} replacement Charset que reemplazaremos
 */
const replaceAll = function(text, search, replacement) {
  var target = text.toString();
  return target.replace(new RegExp(search, 'g'), replacement);
};

/**
 *
 * @param {string} email Email valido
 */
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export { replaceAll, organizacion, email, fileName, validateEmail };
