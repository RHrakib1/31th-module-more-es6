const products = [
    { id: 1, name: 'lanova-phone', price: 25000 },
    { id: 2, name: 'palchare-bike', price: 35000 },
    { id: 3, name: 'pc-build', price: 12000 },
    { id: 4, name: 'i-phone', price: 60000 },
]




class product {
    country = 'bangladesh';
    constructor(name) {
        this.nam = name;
    }
    speak(talk) {
        console.log(`talking about is ${talk}`);
    }
}
const lanovo = new product('lalalal');
console.log(lanovo);
lanovo.speak('hello');



// more example
class teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
const shajahan = new teacher('jahan Topon sir', 'math');
console.log(shajahan);


// more example
console.log('more example');
class medam {
    constructor(name, subject, age) {
        this.name = name;
        this.subject = subject;
        this.age = age;
    }
}
const mem = new medam('zinnat mem', 'data structure', 30);
console.log(mem)