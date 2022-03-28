"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[553],{3905:function(e,r,a){a.d(r,{Zo:function(){return d},kt:function(){return l}});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),u=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},d=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),l=n,f=m["".concat(c,".").concat(l)]||m[l]||p[l]||o;return a?t.createElement(f,i(i({ref:r},d),{},{components:a})):t.createElement(f,i({ref:r},d))}));function l(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4654:function(e,r,a){a.r(r),a.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var t=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"insert-search-bar",title:"Inserir barra de busca"},c=void 0,u={unversionedId:"Tutoriais/Docusaurus/Barra de busca com Docusaurus e DocSearch/insert-search-bar",id:"Tutoriais/Docusaurus/Barra de busca com Docusaurus e DocSearch/insert-search-bar",title:"Inserir barra de busca",description:"No arquivo docusaurus.config.js da sua p\xe1gina de documenta\xe7\xe3o, insira o seguinte trecho em themeConfig (geralmente acima do footer):",source:"@site/docs/02-Tutoriais/01-Docusaurus/02-Barra de busca com Docusaurus e DocSearch/04-insert-search-bar.md",sourceDirName:"02-Tutoriais/01-Docusaurus/02-Barra de busca com Docusaurus e DocSearch",slug:"/Tutoriais/Docusaurus/Barra de busca com Docusaurus e DocSearch/insert-search-bar",permalink:"/my-docs/docs/Tutoriais/Docusaurus/Barra de busca com Docusaurus e DocSearch/insert-search-bar",editUrl:"https://github.com/Thales1330/my-docs/tree/main/docusaurus/my-docs/docs/02-Tutoriais/01-Docusaurus/02-Barra de busca com Docusaurus e DocSearch/04-insert-search-bar.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"insert-search-bar",title:"Inserir barra de busca"},sidebar:"tutorialSidebar",previous:{title:"Integra\xe7\xe3o do Algolia com o Docusaurus",permalink:"/my-docs/docs/Tutoriais/Docusaurus/Barra de busca com Docusaurus e DocSearch/integration-algolia-docusaurus"},next:{title:"Objetivos e pr\xe9-requisitos",permalink:"/my-docs/docs/Tutoriais/wxWidgets/Compilar wxWidgets no Windows com Visual Studio/build-wxwidgets-windows-vs"}},d={},p=[],m={toc:p};function l(e){var r=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inserir-barra-de-busca-na-p\xe1gina-de-documenta\xe7\xe3o"},"Inserir barra de busca na p\xe1gina de documenta\xe7\xe3o"),(0,o.kt)("p",null,"No arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," da sua p\xe1gina de documenta\xe7\xe3o, insira o seguinte trecho em ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig")," (geralmente acima do ",(0,o.kt)("inlineCode",{parentName:"p"},"footer"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"algolia: {\n        apiKey: 'de422be2cbb86f691a8e075918df9738',\n        indexName: 'my-docs',\n        appId: 'X1U3KCSYP8',\n      },\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"O campo ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," deve ser a chave p\xfablica de busca (",(0,o.kt)("a",{parentName:"p",href:"config-algolia-api"},"Search-Only API Key"),"), ",(0,o.kt)("strong",{parentName:"p"},"n\xe3o insira a chave secreta aqui"),". O campo ",(0,o.kt)("inlineCode",{parentName:"p"},"indexName")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," devem ser alterados para a sua p\xe1gina de documenta\xe7\xe3o."))),(0,o.kt)("p",null,"Pronto! Basta ",(0,o.kt)("a",{parentName:"p",href:"../Documenta%C3%A7%C3%A3o%20com%20Docusaurus%20e%20GitHub%20Pages/build-deploy"},"construir e enviar")," a p\xe1gina de documenta\xe7\xe3o no seu reposit\xf3rio para que a barra de busca apare\xe7a."))}l.isMDXComponent=!0}}]);