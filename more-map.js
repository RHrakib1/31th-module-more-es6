// map use krle array er sob element er opor loop chalabe potita element er jonno j function ta disi seta call krbe call korar por jeta return krbe seta k output a array hisabe dekhabe 
const numbers = [2, 3, 4, 5, 6, 7, 8, 9]
const doubleIt = numbers.map(n => n * 2)
console.log(doubleIt);

console.log("five add")
const fivrSum = numbers.map(x => x + 5);
console.log(fivrSum);


// vag kora
console.log('divaied');
const divided = numbers.map(num => num / 2);
console.log(divided);


// kono string er length 
console.log('string er length ');
const friends = ['tom', 'jerry', 'oggy', 'doremon', 'nobeta'];
const friendsLength = friends.map(name => name.length);
console.log(friendsLength);

// friends variable er modhe nam gular 1st latter gula 
const firstLeatter = friends.map(leatter=>leatter[1]);
console.log(firstLeatter)