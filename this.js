class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    slep() {
        console.log(`sleping now ${this.name}`)
    }
}
const kodom = new person('ajhar ali', 55);
console.log(kodom);
kodom.slep();

const badam = new person('kacha badam', 59);
badam.slep();