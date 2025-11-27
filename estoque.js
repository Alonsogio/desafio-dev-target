import fs from "fs";

export function movimentarEstoque(codigoProduto, quantidade, descricao) {
  const dados = JSON.parse(fs.readFileSync("./data/estoque.json", "utf8"));
  const produtos = dados.estoque;

  const item = produtos.find(p => p.codigoProduto === codigoProduto);

  if (!item) return "Produto não encontrado.";

  item.estoque += quantidade; 

  fs.writeFileSync("./data/estoque.json", JSON.stringify(dados, null, 2));

  return {
    id: Date.now(),
    descricao,
    estoqueFinal: item.estoque
  };
}
