const prompt = require('prompt-sync')()

const salario = Number(prompt('Informe o valor do salario'))
const percentual = Number(prompt('Informe o percentual do ajuste'))
const  novosalario = salario + (salario * (percentual/100))

console.log(novosalario)
