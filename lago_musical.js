// Sonidos de cada animal
const sonidos = {
  'rana': ['brr', 'birip', 'brrah', 'croac'],
  'libelula': ['fiu', 'plop', 'pep'],
  'grillo': ['cric-cric', 'trri-trri', 'bri-bri']
}

// Canciones del explorador
const canciones = [
  ['brr', 'fiu', 'cric-cric', 'brrah'],
  ['pep', 'birip', 'trri-trri', 'croac'],
  ['bri-bri', 'plop', 'cric-cric', 'brrah']
]

function entonarCancion(sonido) {
  const silencio = canciones.every(cancion => cancion.includes(sonido === 'brrah' || sonido === 'croac'));

  if (!silencio) {
    for (const cancion of canciones) {
      const startIndex = cancion.findIndex(item => item === sonido);
      
      if (startIndex !== -1 && startIndex !== 3) {
        return cancion.slice(startIndex).join(', ');
      }
    }
  }

  return '';
}

console.log(entonarCancion('brr'));
console.log(entonarCancion('birip'));
console.log(entonarCancion('plop'));
console.log(entonarCancion('croac'));
console.log(entonarCancion('brrah'));
console.log(entonarCancion('fiu'));
console.log(entonarCancion('pep'));
console.log(entonarCancion('cric-cric'));
console.log(entonarCancion('trri-trri'));
console.log(entonarCancion('bri-bri'));

