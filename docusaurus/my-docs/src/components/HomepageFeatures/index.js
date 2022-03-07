import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'O que vou encontrar aqui?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Provavelmente tutoriais e documentações diversas que repetidamente utilizo e acabo
        esquecendo como fazê-lo.
        Com esse site pretendo reunir essas documentações em um único lugar para evitar retrabalho 😅.
      </>
    ),
  },
  {
    title: 'Qual o foco da documentação?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Provavelmente vou inserir processos de configurações que geralmente são necessários
        vários passos precisos e detalhados. Também irei postar assuntos relacionados à Engenharia Elétrica ⚡!
      </>
    ),
  },
  {
    title: 'Quem escreveu isso?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Meu nome é Thales, sou Prof. Dr. na Universidade Federal de Uberlândia.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
