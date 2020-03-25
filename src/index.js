const sayHello = () => "Hello World";

const greet = fnMessage => {
    console.log(fnMessage());
};

greet(sayHello);

let numbers = [1, 2, 3, 4];

console.log(numbers);

const sum = numbers.reduce((a, b) => a + b);

console.log(sum);

console.log(numbers.map(number => number * 2));
