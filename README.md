# Agenda de tarefas

> **Importante**
>
> Antes de iniciar, siga os passos a seguir

1. Use o comando a seguir para clonar este projeto em seu computador

   ```sh
   git clone https://github.com/guiseek/agenda-de-tarefas.git
   ```

   em seguida abra o projeto usando o _VSCode_ com o comando

   ```sh
   code agenda-de-tarefas
   ```

1. Faça a instalação dos pacotes npm

   ```sh
   npm install
   ```

1. Execute o projeto em modo de desenvolvimento
   ```sh
   npm run dev
   ```

## Instruções

### Objetivo

Salve os dados do formulário para que seja possível navegar entre os dias usando o calendário, permitindo listar apenas as tarefas do dia selecionado.

1. ### Armazenar

   1. Durante o evento de submissão do formulário, modifique a função `setTasks` para que seja possível armazenar os dados da tarefa submetidos pelo formulário usando `localStorage`.

1. ### Recuperar
   1. No HTML, crie um item para lista usando o elemento `<template>`.
   1. Durante o evento de seleção do calendário, encontre a função `getTasks`, e modifique seu interior para recuperar os dados usando `localStorage`.
   1. Quando estiver recebendo a lista de tarefas como um `Array`, percorra cada item e, usando `template.content.cloneNode(true)`, clone um novo item, modifique o texto interior e então adicione a lista no HTML.

### Resultado esperado

1. O app deve conseguir criar tarefas usando o formulário e armazena-las localmente, sendo que mesmo atualizando a página, as tarefas permaneçam salvas.

1. O app deve conseguir listar tarefas armazenadas abaixo do calendário

1. Ao clicar em um dia do calendário, a lista de tarefas deve sempre ser atualizada, seja uma lista vazia ou tarefas relacionadas ao dia selecionado.

### Arquivos úteis

```sh
📦
├───📂 src
│   ├──📜 main.ts
│   └──📜 style.scss
│
├─────📂 usecases
│     ├──📜 get-tasks.ts
│     └──📜 set-tasks.ts
│
├─📜 index.html
```

### Dicas

Para esta missão, evite adicionar complexidades desnecessárias, não recomendo o uso de `ctrl+c` e `ctrl+v` pois o problema exige o acréscimo de poucas linhas de código, entenda o problema antes de codificar.

Descubra quais os métodos da [`Web Storage API`](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) devem ser utilizados e onde devem ser adicionados.

Entenda qual chave você pode utilizar como índice no momento em que for armazenar os dados para que fique simples recuperá-los com a informação disponível na seleção do calendário.

> ⚠️ **Importante** ⚠️
>
> Não se esqueça de abrir o console do navegador durante o desenvolvimento!
> Para abri-lo, clique com o botão direito do mouse sobre a página e vá em **Inspecionar** (última opção), em seguida selecione a aba **Console**.
