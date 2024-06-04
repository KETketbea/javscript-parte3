const calcular1 = () => {
    let Altura = Number(document.querySelector('#N1').value)
    let Peso = Number(document.querySelector('#N2').value)

    let valor = Peso/(Altura * Altura)

    let res = document.querySelector('#resultado')
    res.innerHTML = `Seu IMC é de: ${valor}`
}

let resultado = document.querySelector('#Enviar')

resultado.addEventListener('click', calcular1)