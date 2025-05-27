function soma(number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    return 'Erro';
  }
  return number1 + number2;
}

exports.somar = soma;

function dividir(number1, number2) {
  if (number2 === 0 || typeof number1 !== 'number' || typeof number2 !== 'number' ) {
    return 'Erro';
  }
  return number1 / number2;
}

exports.dividir = dividir;
