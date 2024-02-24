// filter use krle functiona j condition thakbe seta k j j full fill krbe se se output a asbe array hisabe jodi keu na mile tahole akta emty arry dibe
const players = [50, 65, 69, 75, 80, 83, 43, 66,];
// const selected = players.filter(inch => inch > 70);
const evenInch = players.filter(inch => inch % 2 === 0);
console.log(evenInch);



// example 2  string er lenght 5 er besi gula k output dekhabe 
const name1 = ['jone', 'motu', 'patlu', 'ghasiteram', 'jhatka']
const compryer = name1.filter(name1 => name1.length > 5);
console.log(compryer);