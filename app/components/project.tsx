import Bestiario from "../assets/bestiario.png"
import { Smartphone, Monitor, Code2, Github} from 'lucide-react'

type Props = {
    image:string;
    title:string;
    description:string;
    responsive:boolean;
    technology:string;
    application:string;
    repository:string;
}

export function Project(prop:Props){
    return(
        <li className="max-w-96 w-full border-2 border-[#64ffda] h-[32rem] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-2 ">
                <p className="text-[#64ffda] text-base">{prop.title}</p>
                <img src={prop.image} className="w-11/12 mt-2"/>
                <p className="w-11/12 text-justify">{prop.description}</p>
                <b>Tecnologias</b>
                <p>{prop.technology}</p>
                <div className="flex gap-2">
                    <Monitor/>
                    {prop.responsive &&(
                        <Smartphone/>
                    )}
                </div>
                <div className="flex justify-around gap-1 lg:gap-7">
                    <a href={prop.application} target="#" className="flex items-center gap-1 border-[#64ffda] border-[1px] p-3"><Code2 size={17}/> Aplicação</a>
                    <a href={prop.repository}  target="#"  className="flex items-center gap-1 border-[#64ffda] border-[1px] p-3"><Github size={17}/> Repositório</a>
                </div>
            </div>
        </li>
        
        
    )
}