// Kelvin temperature is set to 293 K
const kelvin = 273;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

//.floor() method from the Math library to round down the Fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); 

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The degrees of heat is ${newton} degrees Newton.`);