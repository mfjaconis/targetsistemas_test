const faturamentoPorEstado = {
	SP: 67836.43,
	RJ: 36678.66,
	MG: 29229.88,
	ES: 27165.48,
	Outros: 19849.53,
};

function calcularPercentuais(faturamentoPorEstado) {
	const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
		(acc, valor) => acc + valor,
		0,
	);

	const percentuais = {};
	for (const estado in faturamentoPorEstado) {
		const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
		percentuais[estado] = percentual.toFixed(2);
	}

	return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

for (const estado in percentuais) {
	console.log(
		`O percentual de representação de ${estado} foi ${percentuais[estado]}%`,
	);
}
