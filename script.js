const input = document.querySelector('.calculator');
const output = document.querySelector('.results-value');
let num;
let operation;
let result;

// Evento para escutar o click na calculadora
input.addEventListener("click", function (event) {

    // Clicando em números
    if (event.target.classList.contains('num')) {

        // Condição para apagar o display ao digitar um novo número
        if ((output.innerText == 0) || (result > 0 )) {
            output.innerText = '';
            result = 0;
        };

        // Condição para limitar o número de caracteres digitados na calculadora
        if (output.innerText.length < 10) {
        output.innerText = output.innerText + event.target.innerText;
        }
        else {
            output.innerText = output.innerText.slice(1) + event.target.innerText;
        }
    }

    // Clicando no C (limpar)
    else if (event.target.classList.contains('clear')) {
        output.innerText = 0;
        num = 0;
        operation = 0;
    }

    // Clicando no < (apagar)
    else if (event.target.classList.contains('back')) {
        output.innerText = output.innerText.slice(0, -1);
    }

    // Clicando na primeira operação
    else if (event.target.classList.contains('operator')) {

        // Checa se já foi solicitada uma operação antes, caso sim já imprime o valor na tela
        if (typeof(operation) === 'string') {
            result = calcul(num,output.innerText,operation);
            output.innerText = result;
            num = parseInt(output.innerText);
        }
        else {
            num = parseInt(output.innerText);
            output.innerText = '';
        }
        operation = event.target.innerText;
    }

    // Clicando no pedido pelo resultado, invoca a função calculadora e imprime na tela
    else if (event.target.classList.contains('equals')) {
        result = calcul(num,output.innerText,operation);
        output.innerText = result;
        num = 0;
        operation = 0;
    }
});

// Função calculadora
function calcul(a,b,op) {
    switch (op) {
        case '+':
            return (parseInt(a) + parseInt(b));
        case '-':
            return (parseInt(a) - parseInt(b));
        case 'x':
            return (parseInt(a) * parseInt(b));
        case '÷':
            return (parseInt(a) / parseInt(b));
    }
}
