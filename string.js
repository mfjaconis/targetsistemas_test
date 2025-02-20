const string = "Meu nome é Matheus";

let stringInvertida = "";

for (let i = string.length - 1; i >= 0; i--) {
	stringInvertida += string[i];
}

console.log(`String original: ${string}`);
console.log(`String invertida: ${stringInvertida}`);
