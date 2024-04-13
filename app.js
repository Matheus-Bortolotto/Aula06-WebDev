var resultado = document.getElementById('resultado')

function clicarSoma(){
    var n1 = parseFloat(document.getElementById("numero1").value) ;
    var n2 = parseFloat(document.getElementById("numero2").value); 

    var soma = n1 + n2

    resultado.innerText = `O resultado da soma é ${soma}`
}

function clicarSub(){
    var n1 = parseFloat(document.getElementById("numero1").value) ;
    var n2 = parseFloat(document.getElementById("numero2").value); 

    var subtração = n1 - n2

    resultado.innerText = `O resultado da subtração é ${subtração}`
}

function clicarMul(){
    var n1 = parseFloat(document.getElementById("numero1").value) ;
    var n2 = parseFloat(document.getElementById("numero2").value); 

    var multiplicação = n1 * n2

    resultado.innerText = `O resultado da multiplicação é ${multiplicação}`
}

function clicarDiv(){
    var n1 = parseFloat(document.getElementById("numero1").value) ;
    var n2 = parseFloat(document.getElementById("numero2").value); 

    var divisão = n1 / n2

    resultado.innerText = `O resultado da divisão é ${divisão}`
}
