import {projects} from './data'
import { Project } from './project'
import Bestiario from "../assets/bestiario.png"
import { MonitorSmartphone, Monitor, Code2, Github} from 'lucide-react'

export function Projects(){
    return(
        <section className="h-screen w-full flex flex-col items-center justify-center mt-9" id='projects'>
            <h2 className="text-lg text-[#64ffda] mb-3">Projetos</h2>
            <ul className="w-[80%]">
                <li className="w-full border-2 border-[#64ffda] h-[30rem] lg:w-96">
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-[#64ffda] text-base">Bestiário de Xadrez</p>
                    <img src={Bestiario.src} className="w-11/12 mt-2"/>
                    <p className="w-11/12 text-justify">O "Bestiário de Xadrez" é um projeto que apresenta uma descrição do movimento de cada peça do jogo de xadrez, juntamente com sua pontuação relativa. Este projeto visa proporcionar uma referência rápida e fácil para os movimentos e valores das peças de xadrez.</p>
                    <b>Tecnologias</b>
                    <p>HTML, CSS e Javascript</p>
                    <MonitorSmartphone/>
                    <div className="flex gap-6">
                        <a href="" className="flex items-center gap-1"><Code2 size={17}/> Aplicação</a>
                        <a href="" className="flex items-center gap-1"><Github size={17}/> Repositório</a>
                    </div>
                </div>
                </li>
                
            </ul>
        </section>
    )
}