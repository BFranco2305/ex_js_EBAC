const form = document.getElementById("form-numeros");


function valor(numeroA, numeroB) {
    valorFinal = numeroB - numeroA;
    return valorFinal;

}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let numeroA = parseFloat(document.getElementById('numeroA').value);
    let numeroB = parseFloat(document.getElementById('numeroB').value);

    if (valor(numeroA, numeroB) > 0){
        document.querySelector('.mensagemErro').style.display = 'none';
        document.querySelector('.mensagemSucesso').style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    } 
    else {
    document.querySelector('.mensagemErro').style.display = 'block';
    document.querySelector('.mensagemSucesso').style.display = 'none';
        }
    });