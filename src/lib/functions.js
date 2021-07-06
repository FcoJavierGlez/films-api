/**
 * Normaliza la entrada de una búsqueda pasada comoparámetro en la URL
 * para realizar la búsqueda con una expresión regular preparada
 * 
 * @param {String} input Búsqueda obtenida de la URL
 * @returns {String} Búsqueda normalizada para ser usada como RegExp
 */
export const normalizeSearchRegExp = input => input.replace( /\+/g, " " )
                                        .replace( /[aá]/gi, "(a|á)" )
                                        .replace( /[eé]/gi, "(e|é)" )
                                        .replace( /[ií]/gi, "(i|í)" )
                                        .replace( /[oó]/gi, "(o|ó)" )
                                        .replace( /[uú]/gi, "(u|ú)" );