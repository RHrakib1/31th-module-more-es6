// map use krle array er sob element er opor loop chalabe potita element er jonno j function ta disi seta call krbe call korar por jeta return krbe seta k output a array hisabe dekhabe 
// kono kisu double korar jonno
const numbers = [5, 2, 4, 3, 6];

const doubled = [];
for (const num of numbers) {
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);


// ------------------->>>  opor er onshoke bivinno vabe kora jai  <<<<<<------------------------

const numb = [5, 4, 3, 9, 7, 10]
function doubleIt(num) {
    return num * 2;
}
const result = numb.map(doubleIt);
console.log(result);



// extra
const double2 = n => n * 2;
const output2 = numb.map(double2);
console.log(output2);

// more extra
console.log('last exapm')
const doubleIt2 = numb.map(n => n * 2);
console.log(doubleIt2);