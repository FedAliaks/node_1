console.log('Hello version 0.0.0')

const operationObj = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
};

function mathOperation(operation, a, b) {
    return(operationObj[operation](b, a))
}

function transformPolishNotation(str) {
    let stack = [];

    str.split(' ').forEach((item) => {
        stack.push(item in operationObj 
            ? mathOperation(item, stack.pop(), stack.pop())
            : Number(item))
    });

    return stack.pop();
};

module.exports = transformPolishNotation