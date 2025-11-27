import { calcularComissoes } from "./comissoes.js";
import { movimentarEstoque } from "./estoque.js";
import { calcularJuros } from "./juros.js";


const comissoes = calcularComissoes();
const formatadas = {};

for (const vendedor in comissoes) {
  formatadas[vendedor] = comissoes[vendedor].toFixed(2);
}

console.log("=== COMISSÕES ===");
console.log(formatadas);



console.log("=== MOVIMENTAÇÃO DE ESTOQUE ===");
const mov = movimentarEstoque(101, -10, "Saída para loja");
console.log(mov);


console.log("=== JUROS ===");
const juros = calcularJuros(1000, "2025-01-20");
console.log(`Juros: R$ ${juros.toFixed(2)}`);
