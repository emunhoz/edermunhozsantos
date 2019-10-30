---
title: 'Estruturas de pastas para apps front end'
date: '2019-10-14 07:41:34'
description: Estrutura de front end que gosto de trabalhar
category: Estrutura
background: '#7d4cdb'
image: '/assets/img/06.jpg'
---

## Intro

Existem várias maneiras pra estruturar projetos front ends e nenhuma delas é bala de prata.\
A melhor estrutura é aquela onde fica claro sobre o que cada pasta faz e pra que serve cada arquivo. Precisa ser consistente a ponto de que novas pessoas na equipe possa entender facilmente e por fim todos que trabalham nela precisam sentir-se confortáveis com a estrutura.

Subi no Github um [Boilerplate com React + Redux](https://github.com/emunhoz/react_boilerplate) que hoje faz muito sentido e sinto confortável para desenvolver.

## Sobre a stack que gosto

* React
* Redux com Ducks pattern 🦆
* Styled-components 💅
* Axios para requisições



## Sobre a estrutura

### Components

Começando com a pasta `components`: Utilizo todos components stateless, ou seja, só recebem dados para montar a ui. Não existe lógica de negócio nesses arquivos e nem redux.


### Containers

A pasta `containers` é onde fica a lógica principal com as regras de negócio. Ela também é responsável pelas requisições na API, redux (caso existir) e chama os componentes corretos para camada de visualização.

### Pages

Ela é responsável por montar o template com todos os containers necessários para servir o arquivo de rota e apresentar a página final para o usuário. Não tem lógica, não tem redux. No máximo, um arquivo de estilo para organizar os containers/components na página.

### Services

A pasta services fica responsável por organizar as requisições para API. Por exemplo: um arquivo `user.js` dentro desta pasta teria todas funções que envolve criação, atualização e excluir um usuário.

### Store

Todo gerenciamento de estado da aplicação utilizando [_ducks pattern_](https://github.com/erikras/ducks-modular-redux)_._ A maneira enxuta de utilizar o ducks como pattern no redux facilita bastante construir módulos sem a necessidade de ficar criando vários e vários arquivos. A diferença dele para outras estruturas é a união de actions, reducers e types em um único arquivo e isso não significa que seus módulos vão ficar grandes, na maioria dos casos o módulos chegam ter no máximo 5 ou 6 actions.

### Styles

Onde fica o estilo geral da aplicação. Onde defini o [grid](https://edermunhozsantos.netlify.com/css-grid/) do layout, temas, fontes...

### Utils

E por fim, a pasta utils são funções genéricas que podem ser reaproveitadas em toda a aplicação: pode ter funções que aplicam máscaras, parses...
