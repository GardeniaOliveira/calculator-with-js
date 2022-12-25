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

function concatenate(number) { //only concatenate strings 
    if (operator) {
        value2 = value2 + number; 
    }
  else {
        
    value1 = value1 + number; 
   
    }
}
function parseToNumber(number){  //change strings to numbers during the calculate  
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(number))
      return Number(number);
        return NaN;

}


zero.addEventListener("click", function () {
    writeOnScreen(0);
    concatenate(0)
});
one.addEventListener("click", function () {
    writeOnScreen(1);
    concatenate(1)
});
two.addEventListener("click", function () {
    writeOnScreen(2);
    concatenate(2)
});
three.addEventListener("click", function () {
    writeOnScreen(3);
    concatenate(3)
});
four.addEventListener("click", function () {
    writeOnScreen(4);
    concatenate(4)
});
five.addEventListener("click", function () {
    writeOnScreen(5);
    concatenate(5)
});
six.addEventListener("click", function () {
    writeOnScreen(6);
    concatenate(6)
});
seven.addEventListener("click", function () {
    writeOnScreen(7);
    concatenate(7)
});
eight.addEventListener("click", function () {
    writeOnScreen(8);
    concatenate(8)
});
nine.addEventListener("click", function () {
    writeOnScreen(9);
    concatenate(9)
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
    operator='percent';
    writeOnScreen("%");
});
negativeNumber.addEventListener("click", function () {
    writeOnScreen("-");
    changeToNegative("-"); 
});
dot.addEventListener("click", function () {
    writeOnScreen("."); 
    concatenate('.')
})
deleteNumber.addEventListener("click", function () {
    deleteLastNumber(result.innerText)
  
});
resetNumber.addEventListener("click", function () {
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
    let resultPercentage = (n1*n2) / 100 ;
    result.innerText = resultPercentage;
    return resultPercentage;

}

function calculate(n1, operator, n2) {
        parseToNumber(n1);
        parseToNumber(n2);
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
}
equals.addEventListener("click", function () {
    calculate(value1, operator, value2)

});
function deleteLastNumber(number){
    if(number.length === 1){
        number = 0;
        cleanResult()
        result.innerText = 0;
       
    }else{
        let str = number.slice(0, -1);
        nextNumber = str;
        result.innerText = str;
       
    }
}
function cleanResult() {
    nextNumber = "";
    value1 = "";
    value2 = "";
    operator = "";
    result.innerText = 0;

}





 
