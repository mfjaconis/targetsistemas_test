function menorFaturamento(faturamento) {
	const valoresValidos = faturamento.filter((item) => item.valor > 0);
	return Math.min(...valoresValidos.map((item) => item.valor));
}

function maiorFaturamento(faturamento) {
	const valoresValidos = faturamento.filter((item) => item.valor > 0);
	return Math.max(...valoresValidos.map((item) => item.valor));
}

function mediaMensal(faturamento) {
	const valoresValidos = faturamento.filter((item) => item.valor > 0);
	const total = valoresValidos.reduce((acc, item) => acc + item.valor, 0);
	return total / valoresValidos.length;
}

function diasAcimaDaMedia(faturamento, media) {
	const diasAcima = faturamento.filter((item) => item.valor > media);
	return diasAcima.length;
}

// instalar o npm install -g http-server e depois rodar o http-server para trazer a api local com o JSON.
//  Exemplo: http://127.0.0.1:8080/vetores/dados.json

fetch("http://127.0.0.1:8080/vetores/dados.json")
	.then((res) => {
		if (!res.ok) {
			throw new Error("Erro ao carregar o arquivo JSON");
		}
		return res.json();
	})
	.then((data) => {
		const menor = menorFaturamento(data);
		const maior = maiorFaturamento(data);
		const media = mediaMensal(data);
		const diasAcima = diasAcimaDaMedia(data, media);

		console.log(`Menor faturamento: R$ ${menor}`);
		console.log(`Maior faturamento: R$ ${maior}`);
		console.log(
			`Número de dias com faturamento superior à média: ${diasAcima}`,
		);
	})
	.catch((error) => {
		console.error("Erro ao carregar o arquivo JSON:", error);
	});
