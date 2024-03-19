'use client'
import { useEffect, useState } from "react";

type Props = {
    onShow:()=>void
}

export function Email(
    props:Props
){

    

    function copy(){
        navigator.clipboard.writeText('mateusasilvacontato@gmail.com')
        props.onShow()

    }

    return(
            <div className="hidden fixed flex-col items-center right-0 bottom-0 max-w-20 lg:flex">
                <p id="email" className="hover:text-[#64ffda] rounded-full cursor-pointer font-mono rotate-90" onClick={copy}>mateusasilvacontato@gmail.com</p>
                <div className="h-40 w-[0.1rem] bg-[#e6f1ff] mt-[20ch]"></div>
            </div>
            
        
        
    )
}