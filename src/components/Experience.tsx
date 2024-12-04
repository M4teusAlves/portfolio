

import { xps } from "./data"
import { useState } from "react";

interface Props{
    title:string;
    date:string;
    content:string;
}

export function Experience(){

    const [select, Setselect] = useState({title: 'Hackathon de inovação em saúde', date: 'junho de 2023' ,content: 'Participação do Hackathon de inovação como parte da equipe vencedora Conecta Tech&Saúde. Nossa solução para otimização de processos no setor de Nutrição do Hospital de Clínicas UFTM conquistou o primeiro lugar.' })

    function classTitle(title:string){
        
        if(select.title === title){
            return "bg-[#F0F1F3] font-bold p-8 h-20 flex items center"
        } 

        return " text-gray-500 p-8 h-20 flex items center cursor-pointer"

    }


    return(
        <section className=" font-serif flex h-screen items-center justify-center bg-[#F0F1F3]" id="experience">
            <div className="h-[70vh] flex rounded-2xl shadow-xl bg-white w-[80%]">
                <ul className="flex flex-col gap-4 font-semibold h-full">
                    {xps.map((xp : Props) => (
                        <li onClick={()=>Setselect(xp)} className={classTitle(xp.title)}>
                            <p>{xp.title}</p>
                        </li>
                    ))}
                </ul>
                <article className=" w-[70%] flex flex-col justify-start gap-[15%] p-7">
                    <p className="w-full flex justify-end">{select.date}</p>
                    <p className=" font-extrabold text-6xl">{select.title}</p>
                    <p className="text-justify w-[70%] text-lg">{select.content}</p>
                </article>
            </div>
        </section>
    )
}