const numbers = [22, 4, 6, 8, 9, 10, 51, 9, 41];
const total = numbers.reduce((previous, curent) => previous + curent, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum)