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

Gatsby possui plugins para várias ferramentas e para o hojtar existe o [gatsby-plugin-hotjar](https://www.gatsbyjs.org/packages/gatsby-plugin-hotjar/).



```js
// gatsby-config.js

  plugins: [
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: YOUR_HOTJAR_ID,
        sv: YOUR_HOTJAR_SNIPPET_VERSION
      }
    }
  ]
```



Os dois campos necessários para adicionar pode ser achado muito fácil no seu dashboard do hotjar. Procurando por \`Tracking code\` você pode encontrar facilmente o \`Site ID\` e o \`Snippet version\` que são solicitados:

![Exemplo de como encontrar o id e snippet version do hotjar](/assets/img/hotjar-example.png "Exemplo de como encontrar o id e snippet version do hotjar")

Ok, isso é bem simples, mas não quero gravar minha sessão toda vez que abrir o projeto localmente, certo?

Caso queria utilizar somente em produção você pode utilizar variáveis de ambiente com o [dotenv](https://www.npmjs.com/package/dotenv).

**Instale a dependencia:**

```
# with npm
npm install dotenv

# or with Yarn
yarn add dotenv
```

**Segundo**:

Você pode criar dois arquivos na raiz do projeto: .env.dev e .env.prod

```
// .env.dev

TEST=development
HOTJAR_ID=X
HOTJAR_SNIPPET_VERSION=6 
```



```
// .env.prod

TEST=production
HOTJAR_ID=1234567 => Por exemplo
HOTJAR_SNIPPET_VERSION=6
```



E por último:



```js
// gatsby-config.js
  const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'
  require('dotenv').config({ path: `.env.${activeEnv}` })
  module.exports = {
    //...código omitido
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION
      }
    }
```



Pronto! Para verificar se a instalação esta funcionando é só acessar o dashboard do hotjar, selecionar \`Tracking\` no canto direito e depois \`Verify installation\`. Deve abrir seu site com o selo de verificação do hotjar.
