import Bestiario from "../assets/bestiario.png"
import Rockstar from "../assets/rockstargames.png"
import Fluxoteca from "../assets/fluxoteca.png"
import CodeFusion from "../assets/codefusion.png"
import PingMe from "../assets/pingme.png"


export type Props = {
    image:string;
    title:string;
    description:string;
    responsive:boolean;
    technology:string;
    application:string;
    repository:string;
}

export const xps = [
    {title: 'Estágio HC-UFTM', date: '08/2023 - 06/2024', content: 'Estágio Desenvolvimento Java back-end em projeto para otimização de processos no setor de Nutrição do Hospital de Clínicas UFTM.'}, 
    {title: 'Sistema Fluxoteca', date: '01/2024 - até o momento' ,content: 'Participação na ideação e desenvolvimento do sistema de gerenciamento de bibliotecas de código aberto Fluxoteca.' }
    //{title: 'Hackathon Ubyfol', date: '27 a 29 de outubro de 2023', content: 'Participação do Hackathon Ubyfol como parte da equipe que conquistou o terceiro lugar. Desenvolvemos uma solução para o tema Acesso ao Mercado.'}
]

export const projects = [
    {image:Rockstar.src, title:'Clone Rockstargames', description:'Criei um clone do site da Rockstar Games, replicando o design e a estrutura do site oficial. Durante o desenvolvimento, recriei diversas funcionalidades e componentes visuais do site original, como menus de navegação, layout responsivo, e seções dinâmicas.', responsive:false, technology:'React, CSS e Typescript', application:'https://m4teusalves.github.io/clone-rockstargames/', repository:'https://github.com/M4teusAlves/clone-rockstargames'},
    {image:Fluxoteca.src, title:'Fluxoteca', description:'Este é um sistema de gerenciamento de livros e leitores de biblioteca desenvolvido para facilitar o controle e organização de uma biblioteca.', responsive:false, technology:'Next.js, Tailwind, Java, Springboot, PostegresSQL e Typescript', application:'', repository:'https://github.com/M4teusAlves/fluxoteca'},
    {image:CodeFusion.src, title:'CodeFusion', description:'O CodeFusion é um simples feed de posts onde os usuários podem visualizar artigos pré-definidos, comentar sobre eles e aplaudir comentários de outros usuários. Este projeto é ideal para entender os fundamentos do React e praticar habilidades de desenvolvimento frontend.', responsive:true, technology:'React, CSS Modules, Javascript', application:'https://m4teusalves.github.io/code-fusion/', repository:'https://github.com/M4teusAlves/code-fusion'},
    {image:Bestiario.src , title:'Bestiário de Xadrez', description:'O "Bestiário de Xadrez" é um projeto que apresenta uma descrição do movimento de cada peça do jogo de xadrez, juntamente com sua pontuação relativa. Este projeto visa proporcionar uma referência rápida e fácil para os movimentos e valores das peças de xadrez.', responsive:true, technology:'HTML, CSS e Javascript', application:'https://m4teusalves.github.io/Bestiario-de-xadrez/', repository:'https://github.com/M4teusAlves/Bestiario-de-xadrez'},
    {image:PingMe.src, title:'PingMe', description:'Sistema de mensagens instantâneas desenvolvido para proporcionar comunicação rápida, segura e eficiente. Com uma interface intuitiva e recursos otimizados, o PingMe conecta usuários em tempo real, garantindo uma experiência moderna e confiável. ', responsive:false, technology:'Vue.js, PHP/Laravel, CSS e Javascript', application:'', repository:'https://github.com/M4teusAlves/clone-rockstargames'},
    
    //{image: , title:'', description:'', responsive:'', application:'', repository:''},
]

