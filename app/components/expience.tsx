'use client'

import { xps } from "./data"
import { useState } from "react";

type Props = {
    title:string;
    date:string;
    content:string;
}

export function Experience(){

    const [select, Setselect] = useState({title: 'Hackathon de inovação em saúde', date: 'junho de 2023' ,content: 'Participação do Hackathon de inovação como parte da equipe vencedora Conecta Tech&Saúde. Nossa solução para otimização de processos no setor de Nutrição do Hospital de Clínicas UFTM conquistou o primeiro lugar.' })

    function classTitle(title:string){
        
        if(select.title === title){
            return "font-bold p-8 h-20 text-xs flex items-center text-[#64ffda] border-t-4 border-[#64ffda] border-solid lg:text-base lg:border-t-0 lg:border-l-4"
        } 

        return "p-8 h-20 flex items-center cursor-pointer text-xs border-t-4 border-solid border-[#233554] lg:text-base lg:border-t-0 lg:border-l-4"

    }


    return(
        <section className="flex h-screen items-center justify-center" id="experience">
            <div className="h-[60vh] w-[80%] lg:flex">
                <ul className="flex font-semibold lg:block">
                    {xps.map((xp : Props) => (
                        <li onClick={()=>Setselect(xp)} className={classTitle(xp.title)}>
                            <p>{xp.title}</p>
                        </li>
                    ))}
                </ul>
                <article className=" w-[70%] flex flex-col justify-start gap-[15px] p-7 border-l-2 border-[#64ffda] border-solid">
                    <p className="w-full flex justify-end text-sm text-[#64ffda] lg:text-base">{select.date}</p>
                    <p className="w-full font-extrabold text-lg lg:text-6xl text-[#bee9df]">{select.title}</p>
                    <p className="w-full text-justify w-[70%] text-base lg:text-lg">{select.content}</p>
                </article>
            </div>
        </section>
    )
}