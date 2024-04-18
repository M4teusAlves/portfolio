import Dino from '../assets/dinossauro.gif'
import Bestiario from "../assets/bestiario.png"

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
    {title: 'Hackathon de inovação em saúde', date: 'junho de 2023' ,content: 'Participação do Hackathon de inovação como parte da equipe vencedora Conecta Tech&Saúde. Nossa solução para otimização de processos no setor de Nutrição do Hospital de Clínicas UFTM conquistou o primeiro lugar.' },
    {title: 'Nutricão HC-UFTM', date: '08/2023 - até o momento', content: 'Estágio Desenvolvimento Java back-end em projeto para otimização de processos no setor de Nutrição do Hospital de Clínicas UFTM'}, 
    {title: 'Hackathon Ubyfol', date: '27 a 29 de outubro de 2023', content: 'Participação do Hackathon Ubyfol como parte da equipe que conquistou o terceiro lugar. Desenvolvemos uma solução para o tema Acesso ao Mercado.'}
]

export const projects = [
    {image:Bestiario.src , title:'Bestiário de Xadrez', description:'O "Bestiário de Xadrez" é um projeto que apresenta uma descrição do movimento de cada peça do jogo de xadrez, juntamente com sua pontuação relativa. Este projeto visa proporcionar uma referência rápida e fácil para os movimentos e valores das peças de xadrez.', responsive:true, technology:'HTML, CSS e Javascript', application:'https://m4teusalves.github.io/Bestiario-de-xadrez/', repository:'https://github.com/M4teusAlves/Bestiario-de-xadrez'},
    //{image:Bestiario.src , title:'Bestiário de Xadrez', description:'', responsive:'', application:'', repository:''},
]

