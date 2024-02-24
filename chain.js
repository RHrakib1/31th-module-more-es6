// data access
const data = [{ name: 'abul', address: 'dhanbari', age: 55 }];
console.log(data[0].age)


// example 2 
const product = {
    name: 'phone',
    price: 20000,
    info: [
        { id: 1, rem: 64, batter: 500, camara: '50mgpx' },
        { id: 2, rem: 604, batter: 1000, camara: '550mgpx' },
        { id: 3, rem: 6, batter: 100, camara: '5mgpx' },
    ],
    location: 'gaibandha'
}
console.log(product.info[2].camara);

// example 3 
const user = {
    name: 'rakib',
    age: 22,
    address:{
        street:{
            city:"gaibandha",
            country:'bd',
        },
    },
    address2: 'profesor',
}

console.log(user.address.street?.country);



// "?" use kora hoi kono obj jodi na thake r tao jodi amra console a likhi output dekhar jonno tokhn use hbe

