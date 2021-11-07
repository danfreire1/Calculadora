signal = '';
times = 0;

function clearScreen() {
    document.getElementById('result').value = '';
    firstNumber = '';
    signal = '';
    secondNumber = '';
    times = 0;
}

function display(inputValue) {
    moreOperation = false;

    // Verifica se o valor do botão clicado foi de algum sinal
    if(inputValue == '+' || inputValue == '-' || inputValue == '/' || inputValue == '*') {
        // Se o sinal foi clicado mais de uma vez
        if(times != '') {
            signal = inputValue;
            aditionalOperation();
            return;
        }

        firstNumber = result;
        signal = inputValue;

        times += 1;
    }

    btnClicked = inputValue;
    resultValue = document.getElementById('result').value;
    result = resultValue.concat(btnClicked);
    document.getElementById('result').value = result;
}

// Esta função calcula a expressão e retorna o resultado na tela
function calculate(moreOperation) {
    // Adição
    if(signal == '+') {
        arrayResult = document.getElementById('result').value.split('+');
        secondNumber = arrayResult[1];
        finalResult = Number(firstNumber) + Number(secondNumber);
        
        document.getElementById('result').value = finalResult;
    }

    // Subtração
    if(signal == '-') {
        arrayResult = document.getElementById('result').value.split('-');
        secondNumber = arrayResult[1];
        finalResult = Number(firstNumber) - Number(secondNumber);

        document.getElementById('result').value = finalResult;
    }

    // Divisão
    if(signal == '/') {
        arrayResult = document.getElementById('result').value.split('/');
        secondNumber = arrayResult[1];

        // Verifica se o segundo número da divisão não é igual a zero
        if(secondNumber == '0') {
            document.getElementById('result').value = 'Não é possível dividir por zero!!'
            return;
        }

        finalResult = Number(firstNumber) / Number(secondNumber);
        
        document.getElementById('result').value = finalResult;
    }

    // Multiplicação
    if(signal == '*') {
        arrayResult = document.getElementById('result').value.split('*');
        secondNumber = arrayResult[1];
        finalResult = Number(firstNumber) * Number(secondNumber);

        document.getElementById('result').value = finalResult;
    }
}

// Função para realizar a operação matemática caso o usuário clicou mais de uma vez em algum sinal
function aditionalOperation() {
    value = document.getElementById('result').value;
    addOp = eval(value);
    firstNumber = addOp;
    document.getElementById('result').value = addOp+''+signal;
}