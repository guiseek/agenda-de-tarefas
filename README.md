# Agenda de tarefas

## Instruções

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

## Objetivo

Salve os dados do formulário para que seja possível navegar entre os dias usando o calendário, permitindo listar apenas as tarefas do dia selecionado.

> ⚠️ Importante ⚠️
>
> Não se esqueça de abrir o console do navegador durante o desenvolvimento!
>
> Para abri-lo, clique com o botão direito do mouse sobre a página e vá em **Inspecionar** (última opção), em seguida selecione a aba **Console**.

1. Na função `getTasksByDate`, no arquivo `get-tasks-by-date.ts`, atribua para `const tasks` a lista retornada com `localStorage` usando a data (`date`) como chave.

1. Na função `setTasksByDate`, no arquivo `set-tasks-by-date.ts`, adicione a nova tarefa como um novo item do `Array` declarado como `tasks` e atribuído com o retorno da função `getTasksByDate`.

   E então armazene a lista de tarefas atualizada usando `localStorage` usando a data (`task.date`) como chave.

1. No arquivo `index.html`, escolha tags HTML que represente [semanticamente](https://seek.surge.sh/posts/semantica-dos-elementos-html/) as informações da interface `TaskEntity`.

```ts
   interface TaskItem {
     subject: string   // Assunto
     person: string    // Pessoa
     date: string      // Data
     terms: string     // Termos
   }
```

   Pense em uma tag para cada propriedade da interface (a propriedade `terms` não é obrigatória) e pode ficar de fora caso queira. Adicione as tags escolhidas dentro do elemento `<template>` que já existe neste documento.

1. No arquivo `main.ts`, use o laço de repetição `tasks.forEach()` para percorrer cada item da lista de tarefas, faça o clone um novo item do template, preencha o texto interno dos elementos (tags) escolhidos e em seguida, adicione o fragmento a lista de tarefas do documento. Use `template.content.cloneNode(true)` para clonar novos itens do template.

1. Agora que temos a função que preenche os itens e os adiciona no documento, vamos separa-la pra que possa ser reuutilizada em outros momentos.

   Selecione o escopo da função criada para preencher e adicionar ao documento, isso irá fazer com que apareça uma lampada na esquerda superior da área selecionada. Se apareceu, clique nela e depois clique em "Extract to function in module scope". Dê o nome dela de `listTasksByDate`.

1. Escreva uma função com o nome `removeChildren`, ela deve receber como parâmetro um elemento HTML e sua responsabilidade é remover todos os elementos filhos que o elemento fornecido tiver. Uma sugestão é usar um `for` utilizando como fonte de iteração a propriedade `children` do elemento recebido.

### Dicas

Para esta missao, evite adicionar complexidades desnecessárias, não recomendo o uso de **ctrl+c** e **ctrl+v** pois o problema exige o acrescimo de poucas linhas de código, entenda o problema antes de codificar.

Descubra quais os métodos da [Web Storage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage) devem ser utilizados e então onde devem ser adicionados.

Entenda qual chave você pode usar no momento em que for armazenar os dados para que fique simples recuperá-los com a informação disponível na seleção do calendário.

---

### Exemplo para referência

[MDN - Web Storage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage)

---

### Arquivos úteis

```sh
📦
├───📂 src
│   ├──📜 main.ts
│   └──📜 style.scss
│
├─────📂 usecases
│     ├──📜 get-tasks-by-date.ts
│     └──📜 set-tasks-by-date.ts
│
├─📜 index.html
```

---

## Resultado esperado

1. O app deve conseguir criar tarefas usando o formulário e armazena-las localmente, sendo que mesmo atualizando a página, as tarefas permaneçam salvas.

1. O app deve conseguir listar tarefas armazenadas abaixo do calendário

1. Ao clicar em um dia do calendário, a lista de tarefas deve sempre ser atualizada, seja uma lista vazia ou tarefas relacionadas ao dia selecionado.
