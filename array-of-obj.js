const products = [
    { id: 1, name: 'lanova-phone', price: 25000 },
    { id: 2, name: 'palchare-bike', price: 35000 },
    { id: 3, name: 'pc-build', price: 12000 },
    { id: 4, name: 'i-phone', price: 60000 },
]

// map
const name = products.map(nam => nam.name);
const price = products.map(taka => taka.price)
console.log(name);
console.log(price);

// forEach
const each = products.forEach(num => console.log(num.id));

// filter
console.log('besi dam')
const netPrice = products.filter(newPrice => newPrice.price > 30000)
console.log(netPrice);

// find
console.log('kom dam')
const komDam = products.find(komtk => komtk.price < 50000);
console.log(komDam);

// reduece
console.log('reduece');
const total1 = products.reduce((sumationNumber, currentNumber) => sumationNumber + currentNumber.price, 0);
console.log(total1)


