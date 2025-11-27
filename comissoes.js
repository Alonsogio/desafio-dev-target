import fs from "fs";

export function calcularComissoes() {
  const dados = JSON.parse(fs.readFileSync("./data/vendas.json", "utf8"));
  const vendas = dados.vendas;

  const resultado = {};

  vendas.forEach(item => {
    let comissao = 0;

    if (item.valor >= 500) comissao = item.valor * 0.05;
    else if (item.valor >= 100) comissao = item.valor * 0.01;

    if (!resultado[item.vendedor]) resultado[item.vendedor] = 0;

    resultado[item.vendedor] += comissao;
  });

  return resultado; 
}
