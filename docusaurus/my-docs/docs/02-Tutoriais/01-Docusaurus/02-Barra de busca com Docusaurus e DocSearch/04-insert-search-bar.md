---
id: insert-search-bar
title: Inserir barra de busca
---

# Inserir barra de busca na página de documentação

No arquivo `docusaurus.config.js` da sua página de documentação, insira o seguinte trecho em `themeConfig` (geralmente acima do `footer`):
```js title="docusaurus.config.js"
algolia: {
        apiKey: 'de422be2cbb86f691a8e075918df9738',
        indexName: 'my-docs',
        appId: 'X1U3KCSYP8',
      },
```

:::caution Atenção!
O campo `apiKey` deve ser a chave pública de busca ([Search-Only API Key](config-algolia-api)), **não insira a chave secreta aqui**. O campo `indexName` e `appId` devem ser alterados para a sua página de documentação.
:::

Pronto! Basta [construir e enviar](../Documenta%C3%A7%C3%A3o%20com%20Docusaurus%20e%20GitHub%20Pages/build-deploy) a página de documentação no seu repositório para que a barra de busca apareça.