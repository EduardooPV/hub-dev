import type { NextPage } from 'next'

import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { CardDifferentails } from '../components/CardsDifferentails'
import { Cases } from '../components/Cases';
import { BannerCTA } from '../components/BannerCTA';
import { FAQAccordion } from '../components/FAQAccordion';
import { Plans } from '../components/Plans';

import Icon1 from "../../public/components/CardDifferentails/icon1.svg";
import Icon2 from "../../public/components/CardDifferentails/icon2.svg";
import Icon3 from "../../public/components/CardDifferentails/icon3.svg";

import Case1 from "../../public/components/Cases/case1.svg";
import Case2 from "../../public/components/Cases/case2.svg";
import Case3 from "../../public/components/Cases/case3.svg";

// Fiz esse objeto gigante simulando um CMS, já que o tempo foi curto.
const props = {
  header: [
    'Inicio',
    'Sobre',
    'Serviços',
    'Contato',
  ],
  cardDifferentails: {
    card1: {
      icon: Icon1,
      title: 'Resultado em tempo real',
      description: 'Temos uma ferramente de extração de dados que você tem acesso a todos os nossos resultados em tempo real.'
    },
    card2: {
      icon: Icon2,
      title: 'Mais de 50 plataformas',
      description: 'Deixe que nós tomamos conta de seus clientes encontrarem sua empresa, espalharemos ela por mais de 50 ferramentas de busca.'
    },
    card3: {
      icon: Icon3,
      title: 'Deixe o app com sua cara',
      description: 'Edite o aplicativo deixando ela da forma que mais de agrada, desde mudar as cores até editar a lista de acessos rápido.'
    }
  },
  cases: {
    case1: {
      icon: Case1,
      title: 'Potencialize seus usuários',
      description: 'HubLocal insere, otimiza e gerencia a sua empresa de forma única em todos as principais listas, mapas e diretórios da internet como Google Maps, Facebook Places, Apple Maps, Bing Maps e mais de 50 outros sites e aplicativos de buscas por localização.',
      buttonCTA: 'Veja onde estão seus usuários'
    },
    case2: {
      icon: Case2,
      title: 'Agora no seu bolso',
      description: 'HubLocal insere, otimiza e gerencia a sua empresa de forma única em todos as principais listas, mapas e diretórios da internet como Google Maps, Facebook Places, Apple Maps, Bing Maps e mais de 50 outros sites e aplicativos de buscas por localização.',
      buttonCTA: 'Baixe e teste'
    },
    case3: {
      icon: Case3,
      title: 'Suporte 24/7',
      description: 'HubLocal insere, otimiza e gerencia a sua empresa de forma única em todos as principais listas, mapas e diretórios da internet como Google Maps, Facebook Places, Apple Maps, Bing Maps e mais de 50 outros sites e aplicativos de buscas por localização.',
      buttonCTA: 'Veja nossos canais'
    }
  }
}

const Home: NextPage = () => {
  return (
    <>
      <Header props={props}/>
      
      <Hero />

      <CardDifferentails props={props}/>

      <Cases props={props}/>

      <BannerCTA />

      <FAQAccordion />

      <Plans />
    </>
  )
}

export default Home
