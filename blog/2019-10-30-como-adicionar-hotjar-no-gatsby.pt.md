---
title: Como adicionar hotjar no Gatsby
description: Adicionando hotjar de maneira simples no Gatsby
date: '2019-10-30 12:50:15'
image: /assets/img/flame-huge.webp
category: Gatsby
background: '#353b48'
---
## Intro

O [Hotjar](https://www.hotjar.com/) é simplesmente uma ferramenta de análise visual do seu site. Possui várias funcionalidade como gravar sessão do usuário, heatmaps, funis de conversão, surveys, etc...



## Adicionando hotjar com Gatsby

Gatsby possui plugins para várias ferramentas e para o hojtar existe o [\`gatsby-plugin-hotjar\`](https://www.gatsbyjs.org/packages/gatsby-plugin-hotjar/).





Os dois campos necessários para adicionar pode ser achado muito fácil no seu dashboard do hotjar. Procurando por \`Tracking code\` você pode encontrar facilmente o \`Site ID\` e o \`Snippet version\` que são solicitados:

![Exemplo de como encontrar o id e snippet version do hotjar](/assets/img/hotjar-example.png "Exemplo de como encontrar o id e snippet version do hotjar")



Ok, isso é bem simples, mas não quero gravar minha sessão toda vez que abrir o projeto localmente, certo?

Caso queria utilizar somente em produção você pode criar variáveis de ambiente com o [\`dotenv\`](https://www.npmjs.com/package/dotenv).
