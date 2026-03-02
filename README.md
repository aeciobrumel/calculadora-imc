# Calculadora de IMC

Aplicação web para cálculo de IMC (Indice de Massa Corporal), desenvolvida com Next.js e React.
O usuário informa altura e peso, e a interface exibe a classificação correspondente (Magreza, Normal, Sobrepeso ou Obesidade), incluindo o valor calculado.

## Tecnologias

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Funcionalidades

- Entrada de altura e peso
- Cálculo de IMC em tempo de execução
- Classificação por faixas de IMC
- Exibição dinâmica do resultado no grid

## Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

`http://localhost:3000`

## Estrutura principal

- `app/page.tsx`: tela principal e fluxo de cálculo
- `app/helpers/imc.ts`: regras de classificação e função de cálculo
- `app/components/header.tsx`: cabeçalho da aplicação
- `app/components/gridItem.tsx`: card de categoria/resultado


### Tela inicial

<img  width="700" alt="image" src="https://github.com/user-attachments/assets/eaedda48-8810-4bd2-aa1e-a8387b5566ae" />

### Resultado do cálculo

<img  width="700" alt="image" src="https://github.com/user-attachments/assets/df31cdbb-19bf-4836-ab77-7a465bc45580" />


