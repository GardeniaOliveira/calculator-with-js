const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divided = document.getElementById('division');
const percent = document.getElementById('percent');
const dot = document.getElementById('dot');
const negativeNumber = document.getElementById('negative');
const equals = document.getElementById('equals');
const deleteNumber = document.getElementById('delete');
const resetNumber = document.getElementById('reset');
let result = document.getElementById('result');
let nextNumber = "";
let value1 = '';
let value2 = '';
let operator = '';

function writeOnScreen(number) {
    if(number === "-"){

        if(operator){
            nextNumber = nextNumber + number; 
            result.innerText = nextNumber;   
        } else{
            nextNumber = number + nextNumber; 
            result.innerText = nextNumber; 
        }
      
    }else{
        nextNumber = nextNumber + number; 
        result.innerText = nextNumber;  
    } 


}
function changeToNegative(sign){
    if (operator) {
        value2 = sign + value2; 
    }
  else {
    value1 = sign + value1; 
   
    }
}

function changeToNumber(number) {
    if (operator) {
        value2 = value2 + number; 
    }
  else {
        
    value1 = value1 + number; 
   
    }
    

}


zero.addEventListener("click", function () {
    writeOnScreen(0);
    changeToNumber(0)
});
one.addEventListener("click", function () {
    writeOnScreen(1);
    changeToNumber(1)
});
two.addEventListener("click", function () {
    writeOnScreen(2);
    changeToNumber(2)
});
three.addEventListener("click", function () {
    writeOnScreen(3);
    changeToNumber(3)
});
four.addEventListener("click", function () {
    writeOnScreen(4);
    changeToNumber(4)
});
five.addEventListener("click", function () {
    writeOnScreen(5);
    changeToNumber(5)
});
six.addEventListener("click", function () {
    writeOnScreen(6);
    changeToNumber(6)
});
seven.addEventListener("click", function () {
    writeOnScreen(7);
    changeToNumber(7)
});
eight.addEventListener("click", function () {
    writeOnScreen(8);
    changeToNumber(8)
});
nine.addEventListener("click", function () {
    writeOnScreen(9);
    changeToNumber(9)
});
plus.addEventListener("click", function () {
    operator = 'plus';
    writeOnScreen("+");

});
minus.addEventListener("click", function () {
    operator = 'minus';
    writeOnScreen("-");
});
times.addEventListener("click", function () {
    operator = 'times';
    writeOnScreen("*");
});
divided.addEventListener("click", function () {
    operator = 'divided';
    writeOnScreen("/");
});
percent.addEventListener("click", function () {
    writeOnScreen("%");
});
negativeNumber.addEventListener("click", function () {
    writeOnScreen("-");
    changeToNegative("-");
  
   
});

deleteNumber.addEventListener("click", function () {
    cleanResult()
});
resetNumber.addEventListener("click", function () {
    console.log('passou aqui')
    cleanResult()

});

function sum(n1, n2) {
    let resultSum = n1 + n2;
    result.innerText = resultSum;
    return resultSum;

}
function subtraction(n1, n2) {
    let resultSubtraction = n1 - n2;
    result.innerText = resultSubtraction;
    return resultSubtraction;

}
function multiplication(n1, n2) {
    let resultMultiplication = n1 * n2;
    result.innerText = resultMultiplication;
    return resultMultiplication;

}
function division(n1, n2) {
    let resultDivision = n1 / n2;
    result.innerText = resultDivision;
    return resultDivision;

}
function percentage(n1, n2) {
    let resultPercentage = n1*n2 / 100 ;
    result.innerText = resultPercentage;
    return resultPercentage;

}

function calculate(n1, operator, n2) {
    if (operator === 'plus') {
        result.innerText = sum(n1, n2); 
    } else if (operator === 'minus') {
        result.innerText = subtraction(n1, n2);
    } else if (operator === 'times') {
        result.innerText = multiplication(n1, n2);
    } else if (operator === 'divided') {
        result.innerText = division(n1, n2);
    }
    else if (operator === 'percent') {
        result.innerText = percentage(n1, n2);
    }
   
    operator = "";
    value2 = "";
    value1 = result.innerText; 
    nextNumber = value1;
    console.log(value1);
}
equals.addEventListener("click", function () {
    calculate(parseInt(value1), operator, parseInt(value2))

});


function cleanResult() {
    nextNumber = "";
    value1 = "";
    value2 = "";
    operator = "";
    result.innerText = " ";

}


