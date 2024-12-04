'use client'

import { xps } from "./data"
import { useState } from "react";

type Props = {
    title:string;
    date:string;
    content:string;
}

export function Experience(){

    const [select, setSelect] = useState(xps[0])

    function classTitle(title:string){
        
        if(select.title === title){
            return " text-[#64ffda]  border-[#64ffda] border-solid"
        } 

        return "cursor-pointer border-solid border-[#233554]"

    }


    return(
        <section className="flex flex-col gap-4 h-[91vh] items-center justify-center" id="experience">
            <h2 className="text-lg text-[#64ffda] mt-16">Experiências</h2>
            <div className="h-[60vh] w-[80%] flex flex-col items-center justify-center lg:flex-row">
                <ul className="flex font-semibold lg:block">
                    {xps.map((xp : Props, index:number) => (
                    <div key={xp.title}>
                        <li onClick={()=>setSelect(xp)} className={classTitle(xp.title) + " border-t-4 font-bold p-8 h-20 text-xs flex items-center lg:hidden"}>
                            <p>{index+1}</p>
                        </li>
                        <li  onClick={()=>setSelect(xp)} className={classTitle(xp.title) + " hidden font-bold p-8 h-20 text-base border-l-4 lg:flex"}>
                            <p>{xp.title}</p>
                        </li>
                    </div>
                        
                    ))}
                </ul>
                <article className=" w-[70%] flex flex-col justify-start gap-5 p-7 border-l-2 border-[#64ffda] border-solid h-[80%]">
                    <p className="w-full flex justify-start text-sm text-[#64ffda] lg:text-base lg:justify-end">{select.date}</p>
                    <p className="w-full font-extrabold text-lg lg:text-6xl text-[#bee9df]">{select.title}</p>
                    <p className="w-full text-justify text-sm lg:text-lg">{select.content}</p>
                </article>
            </div>
        </section>
    )
}