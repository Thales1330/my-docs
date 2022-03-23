---
id: search-docusaurus-algolia-docsearch
title: Objetivos e pré-requisitos
---

# Barra de busca com docusaurus e Algolia

## Objetivo
O objetivo desse tutorial é apresentar o passo a passo para inserir uma barra de busca com [docusaurus](https://docusaurus.io/) e [Algolia](https://www.algolia.com/) em seu site de forma gratuita. Para criar um site usando o docusaurus, basta acessar o tutorial [clicando aqui](../01-Documenta%C3%A7%C3%A3o%20com%20Docusaurus%20e%20GitHub%20Pages/01-doc-docusaurus-github.md) e seguir os passos descritos.

:::caution Atenção!
Nesse tutorial será apresentado como rodar o DocSearch [*crawler*](https://pt.wikipedia.org/wiki/Rastreador_web) no seu computador usando o [Docker Desktop](https://www.docker.com/) e outras ferramentas.
:::

:::tip Dica!
É possível rodar o *crawler* automaticamente (semanalmente) pelo [DocSearch](https://docsearch.algolia.com/) para projetos *open-source*, porém os requisitos necessários devem ser atendidos, os quais são acessados [clicando aqui](https://docsearch.algolia.com/docs/who-can-apply/). Caso sua aplicação seja aceita, o procedimento de inclusão de uma barra de busca com docusaurus é bem simples.
:::

:::info Nota
Todo o processo descrito é para Windows, mas pode ser facilmente adaptado para outro sistema operacional.
::: 

## Pré-requisitos
- Conta no [Algolia](https://www.algolia.com/);
- [Chocolatey](https://chocolatey.org/install), utilizado para instalar o jq;
- [jq](https://github.com/stedolan/jq/wiki/Installation), utilizado para extrair o JSON do *crawler*;
- [Docker Desktop](https://docs.docker.com/desktop/windows/install/), utilizado para rodar o *crawler*;
- [Git](https://git-scm.com/) para ser utilizado o Git Bash (opcional);
- [Visual Studio Code](https://code.visualstudio.com/) (opcional).

## Instalação
Os pré-requisitos acima devem ser instalados. Para isso, será apresentado o tutorial do [Chocolatey](https://chocolatey.org/install) e do [jq](https://github.com/stedolan/jq/wiki/Installation) que não são triviais.

### Instalação do Chocolatey
Para instalar o Chocolatey, deve utilizado o PowerShell ou o Windows PowerShell em **modo administrador**. Nessa instalação o Prompt de Comando (cmd) não deve ser utilizado.

Após abrir o PowerShell , você deve garantir que `Get-ExecutionPolicy` não seja `Restricted`. Sugere-se usar `Bypass` para ignorar a política para instalação ou `AllSigned` para um pouco mais de segurança:
 - Insira o comando `Get-ExecutionPolicy`. Se retornar `Restricted`, execute o comando `Set-ExecutionPolicy AllSigned` ou `Set-ExecutionPolicy Bypass -Scope Process`.

Agora, execute o seguinte comando:
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Se você não encontrar nenhum erro, você está pronto para usar o Chocolatey! Digite `choco` ou `choco -?` para saber mais sobre o Chocolatey e verificar se a instalação está correta.

### Instalação do jq
Uma vez que está instalado o Chocolatey, você pode instalar o jq. Para isso, execute o seguinte comando no Power Shell no modo administrador:
```bash
choco install jq
```

Pronto! As demais instalações são mais tranquilas de serem realizadas e não serão tratadas nesse tutorial.
