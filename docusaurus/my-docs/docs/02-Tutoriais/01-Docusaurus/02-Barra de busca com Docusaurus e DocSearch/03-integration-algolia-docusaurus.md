---
id: integration-algolia-docusaurus
title: Integração do Algolia com o Docusaurus
---

# Integração do Algolia com o Docusaurus
O próximo passo é a integração do Algolia com o Docusaurus. Para isso, vamos criar um arquivo `.env` no diretório `${RepoDir}\docusaurus\` e inserir as chaves.

:::info O que é `${RepoDir}\docusaurus\`?
O diretório `${RepoDir}\docusaurus\` é o diretório do docusaurus descrito no [tutorial sobre a criação de documentação com docusaurus](../01-Documenta%C3%A7%C3%A3o%20com%20Docusaurus%20e%20GitHub%20Pages/02-repo-gh.md).
:::

No arquivo `.env`, insira o "Application ID" e a chave secreta criada da API do Algolia:
```
APPLICATION_ID=X1U3KCSYP8
API_KEY=CHAVE_SECRETA_DO_ALGOLIA
```

:::warning Atenção!
O arquivo `.env` não deve ser enviado para um repositório público por possuir uma chave secreta!
:::

Após isso, crie um arquivo `config.json` no diretório `${RepoDir}\docusaurus\`. Para o docusaurus, pode ser colado o seguinte arquivo:

```json title="config.json"
{
  "index_name": "my-docs",
  "start_urls": [
    "https://thales1330.github.io/my-docs/"
  ],
  "sitemap_urls": [
    "https://thales1330.github.io/my-docs/sitemap.xml"
  ],
  "sitemap_alternate_links": true,
  "stop_urls": [],
  "selectors": {
    "lvl0": {
      "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
      "type": "xpath",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "header h1",
    "lvl2": "article h2",
    "lvl3": "article h3",
    "lvl4": "article h4",
    "lvl5": "article h5, article td:first-child",
    "lvl6": "article h6",
    "text": "article p, article li, article td:last-child"
  },
  "strip_chars": " .,;:#",
  "custom_settings": {
    "separatorsToIndex": "_",
    "attributesForFaceting": [
      "language",
      "version",
      "type",
      "docusaurus_tag"
    ],
    "attributesToRetrieve": [
      "hierarchy",
      "content",
      "anchor",
      "url",
      "url_without_anchor",
      "type"
    ]
  },
  "conversation_id": [
    "833762294"
  ],
  "nb_hits": 9510
}
```
:::caution Atenção!
Os campos `index_name`, `start_urls` e `sitemap_urls` devem ser alterados para a sua página de documentação. O restante do arquivo pode ser mantido inalterado.
:::

## Executar o *crawler* com uma imagem do Docker

Para executar o *crawler* é necessário o Docker Desktop **instalado e rodando** no computador.

:::warning Atenção!
O comando a seguir **não** deve ser executado no Prompt de Comando (cmd). Utilize o [Git Bash](https://git-scm.com/) ou o PowerShell.
:::

Abra preferencialmente o Git Bash e vá para a pasta `{RepoDir}\docusaurus\` com `cd "{RepoDir}\docusaurus"`. Execute o comando abaixo:

```bash
docker run -i --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

Com isso, sua documentação está indexada. Para verificar a correta execução do comando, acesse o dashboard do Algolia e verifique se o índice nomeado em `index_name` foi criado (acesse pelo menu lateral esquerdo em "Search").

:::tip Dica!
Repita esse passo todas as vezes que você atualizar a documentação. Faça isso após a atualização da página.
:::