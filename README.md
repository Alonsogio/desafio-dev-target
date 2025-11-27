# Desafio Técnico Target – Calculo de Comissões, Controle de Estoque e Juros

Este projeto implementa três funcionalidades principais utilizando **Node.js** e leitura de arquivos JSON locais.

 <br/>
 
# Funcionalidades:

<br/>
 
### 1.  Calculo de Comissões

<br/>

Lê o arquivo vendas.json e calcula a comissão dos vendedores seguindo a regra:

<br/>

- Vendas abaixo de R$100,00 → 0%

- Vendas entre R$100,00 e R$499,99 → 1%

- Vendas a partir de R$500,00 → 5%

<br/>

O resultado final exibe o total de comissão de cada vendedor.

<br/>

### 2. Movimentação de Estoque


Lê o arquivo estoque.json e permite registrar:

- Entrada de mercadorias (número positivo)

- Saída de mercadorias (número negativo)

<br/>

Cada movimentação retorna:

<br/>

- ID único

- Descrição da movimentação

- Estoque final atualizado do produto

  <br/>

O arquivo JSON é automaticamente atualizado.

<br/>

### 3. Cálculo de Juros

   <br/>

A partir de um valor e uma data de vencimento, calcula os juros acumulados até a data atual considerando:

- Multa de 2,5% ao dia

  <br/>

# Como Executar

<br/>

 No terminal, execute:

- **node main.js**
  
<br/>

O resultado exibirá:

- Comissões calculadas

- Movimentação de estoque executada

- Juros calculados

 <br/>
 
 # Tecnologias Utilizadas

- Node.js

- Leitura e escrita de JSON nativo (fs)

- JavaScript (ESM)

  <br/>

# Autor

Desenvolvido por **Giovanna Alonso**.
