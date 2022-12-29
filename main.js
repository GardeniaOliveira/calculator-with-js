const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const percent = document.getElementById('percent');
const dot = document.getElementById('dot');
const negativeNumber = document.getElementById('negative');
const equals = document.getElementById('equals');
const deleteNumber = document.getElementById('delete');
const resetNumber = document.getElementById('reset');
let previous = document.getElementById('previous');
let result = document.getElementById('result');
let current = "";
let value1 = "";
let value2 = '';
let action = '';
let resultTotal = "";

numberButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let value = e.target.innerText;
        writeOnScreen(value);
        concatenate(value);
    })
})
operatorButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let value = e.target.innerText;
        console.log(action, value);
        calculateInTheOperation()
        if (value1.length < 1 || action) {
            console.log(value1);
            return;
        }
        if (value === '+') {
            action = 'plus';
        } else if (value === '–') {
            action = 'minus';
        } else if (value === 'x') {
            action = 'times';
        } else if (value === '÷') {
            action = 'divided';
        }
        console.log(action)
        writeOnScreen(value);
    })
})
function writeOnScreen(value) {
    if (value === "-") {
        if (action) {
            current = current + value;
            result.innerText = current;
        } else {
            current = value + current;
            result.innerText = current;
        }

    } else {
        current = current + value;
        result.innerText = current;
    }
    previous.innerText = current;
    console.log(current);
}
function changeToNegative(sign) {
    action ? value2 = sign + value2 : value1 = sign + value1;
}
function concatenate(number) { //only concatenate strings 
    resultTotal = "";
    action ? value2 = value2 + number : value1 = value1 + number;
    console.log(value1)
    console.log(value2)
}
function parseToNumber(number) {  //change strings with dot to numbers during the calculate  
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
        .test(number))
        return Number(number);
    return NaN;
}
percent.addEventListener("click", function () {
    if (!value2 || current.includes("%")) {
        return;
    }
    writeOnScreen("%");
    value2 = percentage(value1, value2);
    calculateInTheOperation();

});
negativeNumber.addEventListener("click", function () {
    if (!action && value1.includes("-")) {
        return;
    }
    else if (value2.includes("-")) {
        return;
    }

    writeOnScreen("-");
    changeToNegative("-");
});
dot.addEventListener("click", function () {
    if (value1.length < 1) {
        return;
    } else if (!value2 && value1.includes(".")) {
        return;
    } else if (value2.includes(".")) {
        return;
    }
    writeOnScreen(",");
    concatenate(".")

})
deleteNumber.addEventListener("click", function () {
    deleteLastNumber(result.innerText)

});
resetNumber.addEventListener("click", function () {
    cleanResult()

});
equals.addEventListener("click", function () {
    calculate(value1, action, value2);
});
function percentage(n1, n2) {
    let resultPercentage;
    if (action === 'times' || action === 'divided') {
        resultPercentage = (n2 / 100);
        console.log(`resultPorcentage com times ou divided: ${resultPercentage}`);
    } else {
        resultPercentage = n1 * (n2 / 100);
        console.log(`resultPorcentage com add or minus: ${resultPercentage}`);
    }
    return resultPercentage;
}
function formatDisplayNumber(number) { //format the result to decimal 
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];

    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = "";
    } else {
        integerDisplay = integerDigits.toLocaleString("en", {
            maximumFractionDigits: 0,
        });
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay;
    }
}
function calculateInTheOperation() { //calculate when click second time on math operation
    if (value1 && action && value2) {
        let result = calculate(value1, action, value2);
        value1 = result; //subscribe value1 with the result of function calculate to start calculation again
        current = result;
    } else if (resultTotal) {
        value1 = resultTotal;  //if there is a result after calculate, value1 will be this result; 
        current = resultTotal;
    }
}
function calculate(n1, operator, n2) {
    n1 = parseToNumber(n1);
    n2 = parseToNumber(n2);
    let total = "";

    if (operator === 'plus') {
        total = n1 + n2;
        result.innerText = formatDisplayNumber(total);
    } else if (operator === 'minus') {
        total = n1 - n2;
        result.innerText = formatDisplayNumber(total);
    } else if (operator === 'times') {
        total = n1 * n2;
        result.innerText = formatDisplayNumber(total);
    } else if (operator === 'divided') {
        total = n1 / n2;
        result.innerText = formatDisplayNumber(total);
    }
    console.log(total)
    value1 = ""; //continue empty to subscibe the result for new numbers;  
    action = "";
    value2 = "";
    current = "";
    resultTotal = total;  //store the result, only exist when click in equal;  
    return total;
}
function deleteLastNumber(number) {
    if (resultTotal) {
        return;
    }
    if (number.length === 1) { // delete only on screen
        number = 0;
        cleanResult()
        result.innerText = 0;
    } else {
        let str = number.slice(0, -1);
        current = str;
        result.innerText = str;
    }
    if (previous.innerText.length === 1) { // delete only on screen
        number = 0;
        cleanResult()
        previous.innerText = 0;
    } else {
        let str = number.slice(0, -1);
        current = str;
        previous.innerText = str;
    }

    if (action) {
        str = value2.slice(0, -1); // update of value2 without delete numbers
        value2 = str;

    }
    else {
        str = value1.slice(0, -1); // update of value1 without delete numbers 
        value1 = str;
    }
    console.log(value2);
    if (value2 === "") {
        action = "";
    }
}
function cleanResult() {
    current = "";
    value1 = "";
    value2 = "";
    action = "";
    result.innerText = 0;
    previous.innerText = "";
}



