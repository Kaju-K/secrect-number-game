const menorValor = 0
const maiorValor = 1

const elementoMenorValor = document.getElementById("menor-valor")
const elementoMaiorValor = document.getElementById("maior-valor")

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor)

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random()*(max - min + 1) + min)
}

console.log("Número secreto: " + numeroSecreto)
