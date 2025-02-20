const fibonnaci = (n) => {
	let primeiro = 0;
	let segundo = 1;
	const fib = [primeiro, segundo];

	while (segundo < n) {
		const proximo = primeiro + segundo;
		fib.push(proximo);
		primeiro = segundo;
		segundo = proximo;
	}

	if (fib.includes(n)) {
		return `O número ${n} pertence à sequência de Fibonacci.`;
	}
	return `O número ${n} não pertence à sequência de Fibonacci.`;
};

console.log(fibonnaci(31));
