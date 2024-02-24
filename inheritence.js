class janbahon {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

class bus extends janbahon {
    constructor(name, price, seat, temper) {
        super(name, price);
        this.seat = seat;
        this.price = price;
    }
}

class truck extends janbahon {
    constructor(name, price, load, rout) {
        super(name, price)
        this.load = load;
        this.rout = rout;
    }

}