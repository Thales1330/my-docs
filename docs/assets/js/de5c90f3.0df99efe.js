"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[299],{3905:function(e,o,r){r.d(o,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function i(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){i(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function A(e,o){if(null==e)return{};var r,t,i=function(e,o){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(i[r]=e[r]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),s=function(e){var o=t.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},c=function(e){var o=s(e.components);return t.createElement(u.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},l=t.forwardRef((function(e,o){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=A(e,["components","mdxType","originalType","parentName"]),l=s(r),m=i,d=l["".concat(u,".").concat(m)]||l[m]||p[m]||n;return r?t.createElement(d,a(a({ref:o},c),{},{components:r})):t.createElement(d,a({ref:o},c))}));function m(e,o){var r=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=l;var A={};for(var u in o)hasOwnProperty.call(o,u)&&(A[u]=o[u]);A.originalType=e,A.mdxType="string"==typeof e?e:i,a[1]=A;for(var s=2;s<n;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4594:function(e,o,r){r.r(o),r.d(o,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return A},metadata:function(){return s},toc:function(){return p}});var t=r(7462),i=r(3366),n=(r(7294),r(3905)),a=["components"],A={id:"build-deploy",title:"Construir e implementar documenta\xe7\xe3o"},u=void 0,s={unversionedId:"Tutoriais/Documenta\xe7\xe3o com Docusaurus e GitHub Pages/build-deploy",id:"Tutoriais/Documenta\xe7\xe3o com Docusaurus e GitHub Pages/build-deploy",title:"Construir e implementar documenta\xe7\xe3o",description:"Construindo o site",source:"@site/docs\\02-Tutoriais\\01-Documenta\xe7\xe3o com Docusaurus e GitHub Pages\\04-build-deploy.md",sourceDirName:"02-Tutoriais/01-Documenta\xe7\xe3o com Docusaurus e GitHub Pages",slug:"/Tutoriais/Documenta\xe7\xe3o com Docusaurus e GitHub Pages/build-deploy",permalink:"/my-docs/docs/Tutoriais/Documenta\xe7\xe3o com Docusaurus e GitHub Pages/build-deploy",editUrl:"https://github.com/Thales1330/my-docs/tree/main/docusaurus/my-docs/docs/02-Tutoriais/01-Documenta\xe7\xe3o com Docusaurus e GitHub Pages/04-build-deploy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"build-deploy",title:"Construir e implementar documenta\xe7\xe3o"},sidebar:"tutorialSidebar",previous:{title:"P\xe1gina web com docusaurus",permalink:"/my-docs/docs/Tutoriais/Documenta\xe7\xe3o com Docusaurus e GitHub Pages/page-with-docusaurus"},next:{title:"Objetivos e pr\xe9-requisitos",permalink:"/my-docs/docs/Tutoriais/Barra de busca com Docusaurus e DocSearch/search-docusaurus-algolia-docsearch"}},c={},p=[{value:"Construindo o site",id:"construindo-o-site",level:2},{value:"Enviando a p\xe1gina e configurando o GitHub Pages",id:"enviando-a-p\xe1gina-e-configurando-o-github-pages",level:2}],l={toc:p};function m(e){var o=e.components,A=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,t.Z)({},l,A,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"construindo-o-site"},"Construindo o site"),(0,n.kt)("p",null,"Finalmente, ap\xf3s a configura\xe7\xe3o, personaliza\xe7\xe3o e inser\xe7\xe3o da documenta\xe7\xe3o, estamos aptos a construir a p\xe1gina. O docusaurus \xe9 um gerador de site est\xe1tico, logo n\xf3s devemos gerar o site em uma pasta com conte\xfado est\xe1tico antes de enviar para o GitHub Pages para que possa ser acessado. Para gerar o site:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"Os arquivos s\xe3o gerados na pasta ",(0,n.kt)("inlineCode",{parentName:"p"},"${RepoDir}\\docusaurus\\meu-site\\build\\"),", que pode ser copiada para qualquer hospedagem de site est\xe1tico como o GitHub Pages."),(0,n.kt)("h2",{id:"enviando-a-p\xe1gina-e-configurando-o-github-pages"},"Enviando a p\xe1gina e configurando o GitHub Pages"),(0,n.kt)("p",null,"Primeiramente, vamos enviar todo o conte\xfado da p\xe1gina gerada pelo docusaurus para o GitHub:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Crie uma pasta ",(0,n.kt)("inlineCode",{parentName:"li"},"docs")," no diret\xf3rio do reposit\xf3rio: ",(0,n.kt)("inlineCode",{parentName:"li"},"${RepoDir}\\docs"),". Copie ",(0,n.kt)("strong",{parentName:"li"},"todo")," o conte\xfado da pasta ",(0,n.kt)("inlineCode",{parentName:"li"},"${RepoDir}\\docusaurus\\meu-site\\build\\")," para dentro da pasta rec\xe9m criada;"),(0,n.kt)("li",{parentName:"ol"},"Abra o GitHub Desktop, selecione o seu reposit\xf3rio na parte superior esquerda (caso j\xe1 n\xe3o esteja selecionado);"),(0,n.kt)("li",{parentName:"ol"},"Na parte inferior esquerda d\xea um ",(0,n.kt)("em",{parentName:"li"},"Commit to main")," nas suas modifica\xe7\xf5es:",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{loading:"lazy",src:r(8014).Z,width:"240",height:"186"})),(0,n.kt)("li",{parentName:"ol"},"Ap\xf3s isso, d\xea ",(0,n.kt)("em",{parentName:"li"},"Push origin")," para seu c\xf3digo ser enviado para o reposit\xf3rio.")),(0,n.kt)("p",null,'Com o navegador web, acesse o seu reposit\xf3rio no GitHub e v\xe1 na aba "Settings". No menu lateral, acesse a op\xe7\xe3o "Pages". Defina que o c\xf3digo fonte da sua p\xe1gina est\xe1 na pasta ',(0,n.kt)("inlineCode",{parentName:"p"},"docs"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",src:r(6028).Z,width:"542",height:"90"})),(0,n.kt)("p",null,"Pronto! Sua p\xe1gina estar\xe1 dispon\xedvel em poucos minutos agora!"),(0,n.kt)("p",null,"O endere\xe7o do site ser\xe1 do tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"https://NomeDeUsuario.github.io/nome-do-repo/"),"."))}m.isMDXComponent=!0},8014:function(e,o){o.Z="data:image/png;base64,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"},6028:function(e,o){o.Z="data:image/png;base64,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"}}]);