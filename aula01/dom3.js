//getElementById - elemento por id.
let valor1 = window.document.getElementById('elemento1');
valor1.style.color = 'red'


// let valor2 = window.document.getElementById('box2');
// valor2.style.color = 'green'


//getElementsByClassName - elememto pelo nome de classe [0]
let valor2 = document.getElementsByClassName ('P1')[0]
valor2.style.color = 'green'


//getElementsByTagName - elemento por nome da tag <li>
let valor3 = document.getElementsByTagName('li')[1]
valor3.innerText = 'troquei o valor'


let valor4 = window.document.querySelector('#P2')
valor4.innerHTML = 'Aula de 3Dom'

let valor5 = window.document.querySelectorAll('.P3')[0]
valor5.style.color = 'blue'