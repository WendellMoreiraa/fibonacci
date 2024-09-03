function isFibonacci(num) {
  let a = 0,
    b = 1,
    c = 0;
  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }
  return c === num || num === 0;
}

const number = 21;
const result = isFibonacci(number);
console.log(
  `O número ${number} ${
    result ? "pertence" : "não pertence"
  } à sequência de Fibonacci.`
);
