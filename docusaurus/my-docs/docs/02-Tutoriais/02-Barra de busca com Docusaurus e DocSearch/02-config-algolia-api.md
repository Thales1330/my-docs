---
id: config-algolia-api
title: Configurando as chaves da API do Algolia
---

# Configurando as chaves da API do Algolia
Uma vez criada a conta no [Algolia](https://www.algolia.com/), você pode acessar o painel de administração e configurar as chaves da API. Crie uma nova aplicação inserindo o nome, selecione o plano gratuito, o servidor e clique em "Create Appplication".

Clique em "API Keys" e note algumas chaves. Serão relevantes aqui duas informações que são a "Application ID" e a "Search-Only API Key":
```
Application ID: X1U3KCSYP8
Search-Only API Key: de422be2cbb86f691a8e075918df9738
```

Essas informações são públicas e podem ficar no repositório sem problemas. Uma nova chave secreta deve ser criada para criar os índices e gravá-los no Algolia. Para isso, clique em "All API Keys" e clique em "New API Key".

Insira uma descrição para a chave e no campo ACL insira as operações `addObject`, `deleteIndex` e `editSettings`. Clique em "Create".

:::warning Atenção!
A chave criada é secreta e não deve ser compartilhada ou enviada para um repositório público!
:::

Essas são as três informações importantes necessárias para integração com a API do Algolia.