---
id: build-wxwidgets-vs
title: Compilar wxwidgets
---

# Clonar e compilar wxWidgets

## Clonando o repositório do wxWidgets no GitHub
Primeiramente, crie uma pasta para clonar o wxWidgtes. Aconselha-se criar na raiz do drive principal (por exemplo, `C:\wxWidgets`).

:::info Nota
A partir desse momento, a pasta criada para o wxWidgets será mencionada como `${wxDir}` no restante do tutorial.
:::

Vá até a pasta `${wxDir}`, abra o Prompt de Comando digitando `cmd` na barra de navegação antes do endereço da pasta. No Prompt de Comando digite:

```bash
git clone --recursive https://github.com/wxWidgets/wxWidgets.git
```

Ao clonar o repositório, será criada uma pasta `wxwidgets`, copie o seu conteúdo para a pasta criada anteriormente (`${wxDir}`).

## Compilando e configurando o wxWidgets no Visual Studio Community 2022
Abra o Visual Studio Community e abra o arquivo `${wxDir}\build\msw\wx_vc17.sln`. Compile todos os tipos de solução em `Build > Build Solution` (ou F7):
```
Debug|Win32
Debug|x64
Release|Win32
Release|x64
```
:::caution Atenção!
Para o wxWidgets funcionar adequadamente, deve-se criar uma [Variável de Ambiente](https://www.supertutoriais.com.br/pc/como-criar-variaveis-personalizadas-windows-10/) com o nome `WXWIN` com o valor `${wxDir}`.
:::

Agora o wxWidgets está compilado e pronto para ser utilizado.

:::tip Dica!
Reinicie o Visual Studio para ele ficar ciente da nova variável de ambiente.
:::