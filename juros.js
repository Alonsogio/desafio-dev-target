export function calcularJuros(valor, dataVencimento) {
  const hoje = new Date();
  const vencimento = new Date(dataVencimento);

  const diffDias = Math.floor((hoje - vencimento) / (1000 * 60 * 60 * 24));

  if (diffDias <= 0) return 0;

  const juros = valor * 0.025 * diffDias;

  return juros;
}
