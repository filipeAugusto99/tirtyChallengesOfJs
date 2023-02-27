
function recebendoNumeros(numbers) {
  let soma = 0
  numbers.forEach(number => {
    soma += number
  })

  const recebendoNumeros = soma / numbers.length
  return recebendoNumeros
}

console.log(recebendoNumeros([10, 10, 10]))