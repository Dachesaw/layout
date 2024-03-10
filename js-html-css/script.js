function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b != 0) {
        return a / b
    } else {
        return "you can't divide by zero"
    }
}

function arithmetic(a, b, operation) {
    switch (operation) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
        default:
            return "None operation"
    }
}

console.log(arithmetic(25, 2, "+"));
console.log(arithmetic(25, 2, "-"));
console.log(arithmetic(25, 2, "*"));
console.log(arithmetic(25, 2, "/"));
console.log(arithmetic(25, 0, "/"));

console.log("-----------")


function filterEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }
    for (let j = 0; j < result.length; j++) {
        result[j] *= 2;
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const processedNumbers = filterEvenNumbers(numbers);
console.log("Четные числа и умноженные на 2:", processedNumbers);