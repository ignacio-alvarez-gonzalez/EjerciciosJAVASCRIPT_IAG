// Ejercicio 1:
let year = parseInt(prompt("¿En qué año estamos?"));
if (year%4 == 0) {
    alert("Es un año bisiesto.");
} else if ((year+1)%4 == 0) {
        alert("El póximo año bisiesto es " + (year+1));
    } else if ((year+2)%4 == 0) {
        alert("El póximo año bisiesto es " + (year+2));            
    } else if ((year+3)%4 == 0) {
        alert("El póximo año bisiesto es " + (year+3));
    };


// // Ejercicio 2:
const users = [
    {username: 'ppc90', age: 30, premium: true},
    {username: 'ana', age: 35, premium: false},
    {username: 'matilda', age: 21, premium: true},
    {username: 'paco80', age: 22, premium: true},
    {username: 'juana8', age: 52, premium: true},
    {username: 'alonso23', age: 40, premium: false},
    {username: 'ines777', age: 20, premium: false},
];
let noPremium = [];
for (const user of users) {
    if (user.premium == true){
        console.log(`El usuario ${user.username} tiene suscripción premium.`)
    } else if (user.premium == false) {
        noPremium.push(user);
    };
};
console.log(noPremium);

// Ejercicio v2:
const usersv2 = [
    {username: 'ppc90', age: 30, premium: true},
    {username: 'ana', age: 35, premium: false},
    {username: 'matilda', age: 21, premium: true},
    {username: 'paco80', age: 22, premium: true},
    {username: 'juana8', age: 52, premium: true},
    {username: 'alonso23', age: 40, premium: false},
    {username: 'ines777', age: 20, premium: false},
];
const Premiumv2 = usersv2
    .filter(user => user.premium==true)
    .map(user => console.log(`El usuario ${user.username} tiene suscripción premium.`));

const noPremiumv2 = usersv2.filter(function(user){
    return (user.premium==false);
});
console.log(noPremiumv2);


// Ejercicio 3:
const scores = [
    {name: 'Christania Williams', country: 'Jamaica', time: 11.80},
    {name: 'Elaine Thompson', country: 'Jamaica', time: 10.71},
    {name: 'Tori Bowie', country: 'EEUU', time: 10.83},
    {name: 'Marie Josée Ta Lou', country: 'Irlanda', time: 10.86},
    {name: 'Dafne Schippers', country: 'Holanda', time: 10.90},
    {name: 'English Gardner', country: 'EEUU', time: 10.94},
    {name: 'Michelle-Lee Ahye', country: 'Trinidad', time: 10.92},
    {name: 'Shelly-Ann Fraser-Pryce', country: 'Jamaica', time: 10.86}
];
const winner = scores.reduce(function(mejorAtleta, atleta) {
    if (mejorAtleta.time > atleta.time) {
        return mejorAtleta;
    } else {
        return atleta;
    }
}, scores[0]);
console.log("La ganadora de los 100 metros lisos fue " + winner.name);
