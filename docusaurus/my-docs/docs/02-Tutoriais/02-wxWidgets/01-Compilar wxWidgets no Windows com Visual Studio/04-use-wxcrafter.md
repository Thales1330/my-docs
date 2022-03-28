---
id: use-wxcrafter
title: Utilizando o wxCrafter
---

# Utilizando o wxCrafter como ferrramenta RAD

## Código mínimo do wxWidgets com wxCrafter
Os arquivos com os códigos mínimos do wxWidgets com o wxCrafter podem ser baixando [clicando aqui](../../../files/wxCrafter.zip).

:::info Nota
Esses arquivos são gerados automaticamente pelo [CodeLite IDE](https://www.codelite.org/) e serão reaproveitados no nosso projeto!
:::

Crie um novo projeto em branco em C++ e siga **todos** os procedimentos de configuração [utilizado no passo anterior](create-config-wxWidgets-project) sem a inclusão do `minimal.cpp`.

Descompacte os arquivos com os [códigos mínimos do wxWidgets com o wxCrafter](../../../files/wxCrafter.zip) e cole na raiz do seu novo projeto.

:::warning Atenção!
Por conter um arquivo de `.rc` ocorrerá um erro de compilação. Para resolver o erro, acesse as propriedades do projeto `Linker > Manifest File > Generate Manifest` e altere para `No (/MANIFEST:NO)`.
:::

Pronto! Agora basta compilar o projeto baseado no código mínimo fornecido!