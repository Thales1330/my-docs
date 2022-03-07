---
id: page-with-docusaurus
title: Página web com docusaurus
---

## Gerando uma página com docusaurus
Vá até a pasta do repositório no seu computador `${RepoDir}` e crie uma pasta `docusaurus`. Esse passo é importante para organização do seu projeto!  
Na pasta `${RepoDir}\docusaurus\` vá até a barra de navegação do Windows Explorer e digite `cmd`, isso irá abrir o Prompt de Comando ou o Power Shell. Crie um novo site padrão digitando:
~~~bash
npx create-docusaurus@latest meu-site classic
~~~

:::info Nota
Usei aqui o nome genérico "meu-site", substitua pelo nome de sua preferência no comando acima.
:::

Inicie o site:
~~~bash
cd meu-site
npx docusaurus start
~~~

Pronto! Seu site genérico já está criado e rodando em `http://localhost:3000` pela magia dos desenvovedores do [docusaurus](https://docusaurus.io/) e [Node.js](https://nodejs.org/en/download/)!

## Personalizando a página
Antes de mais nada, é importante notar que quaisquer modificações nos arquivos fontes são automaticamente alteradas em `http://localhost:3000`, o que ajuda bastante. Os arquivos devem ser modificados em `${RepoDir}\docusaurus\meu-site\`.

:::tip Dica!
Você pode usar o [Visual Studio Code](https://code.visualstudio.com/) para realizar as modificações e criação das páginas. Basta ir em `Arquivo > Abrir Pasta` e abrir o caminho `${RepoDir}\docusaurus\meu-site\`.
:::

### Configurando o arquivo `docusaurus.config.js`
No aquivo `docusaurus.config.js` serão realizadas as principais configurações da página. Acessando esse arquivo será possível inserir configurações importante e personalizar, por exemplo, o título e subtítulo na página principal. Na sequência segue parte do arquivo de configuração dessa página:
~~~js title="docusaurus.config.js"
const config = {
  title: '💡 Meus Docs 📖',
  tagline: 'Tutoriais e documentações diversos!',
  // highlight-start
  url: 'https://thales1330.github.io/',
  baseUrl: '/my-docs/',
  // highlight-end
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thales1330', 
  projectName: 'Meus docs',
~~~

:::caution Atenção!
Os campos `url` e `baseUrl` devem ser configurados corretamente para que a página possa funcionar corretamente:
- O campo `url` será o seu site no GitHub Pages que geralmente tem o formato com o seu nome de usuário: `https://SeuNomeDeUsuario.github.io/`.
- O campo `baseUrl` é o nome do seu repositório: `\nome-do-repo\`.
:::

Em `presets` você deve alterar o campo `editUrl` em `docs` para o seu repositório do GitHub do tipo:
~~~js title="docusaurus.config.js"
docs: {
    sidebarPath: require.resolve('./sidebars.js'),
    // highlight-start
    editUrl: 'https://github.com/SeuNomeDeUsuario/nome-do-repo/tree/main/docs/docs/',
    // highlight-end
    },
~~~
Note que esse caminho **deve** ser personalizado e dependende dos nomes das pastas escolhidos no processo de instalação e criação de conta.

Ainda em `presets`, o campo `blog` deve ser alterado da mesma forma que o `docs`. Caso não utilize esse recurso é possível desativar o *plugin* de blog inserindo:
~~~js title="docusaurus.config.js"
blog: false,
~~~
 
Personalize os demais campos desse arquivo alterando os valores já existentes.

### Personalizando os arquivos `index.js`
As personalizações da página principal que não estão presentes no arquivo `docusaurus.config.js` estão em dois outros arquivos (ambos com o mesmo nome `index.js`):
1. Arquivo `${RepoDir}\docusaurus\meu-site\src\components\HomepageFeatures\index.js`;
2. Arquivo `${RepoDir}\docusaurus\meu-site\src\pages\index.js`.

No primeiro arquivo poderão ser alterados os textos de descrição no centro da página e o segundo arquivo é alterado o texto do botão de acesso à documentação (podem ser inseridos outros botões se necessário).

## Criando a documentação
Toda a documentação é realizada na pasta `${RepoDir}\docusaurus\meu-site\docs\`. Os arquivos são inseridos em Markdown (`.md`). Um tutorial básico sobre como escrever arquivos Markdown pode ser acessado [clicando aqui](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). Recursos adicionais do docusaurus podem ser [acessados aqui](https://docusaurus.io/pt-BR/docs/markdown-features).

Todos os arquivos `.md` devem ficar dentro da pasta `docs`. Por exemplo, ao criar um novo documento chamado `ola-mundo.md` a estrutura irá ficar da seguinte forma:
~~~bash
meu-site # diretório raiz do site
├── docs
│   └──ola-mundo.md
├── src
│   └── pages
├── docusaurus.config.js
├── ...
~~~

Na parte superior do seu arquivo `.md` insira os campos `id` e `title`. Sem essas informações o docusaurus não irá gerar os arquivos correntamente:
~~~md
---
id: greeting
title: Olá mundo!
---

## Olá mundo!
~~~

É possível organizar em categorias na barra lateral. Existem inúmeras formas de se fazer isso e elas são apresentadas na [documentação do docusaurus](https://docusaurus.io/pt-BR/docs/sidebar). Porém, a maneira mais simples é nomeando os arquivos com prefixos numéricos:
~~~bash
docs
├── 01-Sobre.md
├── 02-Tutorial 1
│   ├── 01-primeira-parte.md
│   ├── 02-segunda-parte.md
│   └── 03-fim.md
├── 03-Tutorial 2
│   ├── 01-primeira-parte.md
│   ├── 02-segunda-parte.md
│   ├── 03-terceira-parte.md
│   └── 04-fim.md
└── 04-Tchau.md
~~~

### Plugin de expressões matemáticas usando $\KaTeX$ (opcional)
É possível imprimir belas equações com a mesma sitaxe do $\LaTeX$ nos arquivos `.md` utilizando o [KaTeX](https://katex.org/). Para habilitar o KaTeX é necessário instalar os *plugins* `remark-math` e `rehype-katex`. Execute o comando no Prompt de Comando ou no Power Shell:

~~~bash
npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
~~~

:::caution Atenção!
Use exatamente essas versões. As versões mais atuais são imcompatíveis com o docusaurus.
:::

Importe os *plugins* em `docusaurus.config.js` (no início do arquivo):
~~~js
const math = require('remark-math');
const katex = require('rehype-katex');
~~~

Adicione-os no `preset` dentro de `docs`:
~~~js
remarkPlugins: [math],
rehypePlugins: [katex],
~~~

Insira o CSS do KaTeX CSS nas configurações com o nome `stylesheets`:
~~~js
stylesheets: [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  },
],
~~~

Portanto, as mudanças no arquivo `docusaurus.config.js` serão do tipo:
~~~js title="docusaurus.config.js"
// Início do arquivo
// highlight-start
const math = require('remark-math');
const katex = require('rehype-katex');
// highlight-end
// [...]

module.exports = {
  title: 'Docusaurus', // [...]  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          // highlight-start
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // highlight-end
        },
      },
    ],
  ],
  // highlight-start
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  // highlight-end
};
~~~

Com isso, será possível imprimir belas equações 😁:
$$
\oint \vec{E}\cdot d\vec{A}= \frac{q_{\mathrm{enc}}}{\varepsilon_0}
$$
$$
\oint \vec{B}\cdot d\vec{A}=0
$$
$$
\oint \vec{E}\cdot d\vec{s}= -\frac{d\Phi_B}{d t}
$$
$$
\oint \vec{B}\cdot d\vec{s}= \mu_0\varepsilon_0\frac{d\Phi_E}{d t}+\mu_0i_{\mathrm{enc}}
$$

Acesse o código fonte dessas equações [aqui](../../Engenharia%20El%C3%A9trica/maxwell-eq-latex).