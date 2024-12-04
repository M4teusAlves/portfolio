'use client'
import { useEffect, useState } from "react";

type Props = {
    onShow:()=>void
}

export function Email(
    props:Props
){
    const [copied, setCopied] = useState(false);

    function copy() {
        navigator.clipboard.writeText('mateusasilvacontato@gmail.com');
        props.onShow();
        setCopied(true);
    }

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                props.onShow();
                setCopied(false);
            }, 2000);

            // Cleanup the timer
            return () => clearTimeout(timer);
        }
    }, [copied, props]);

    return(
            <div className="hidden fixed flex-col items-center right-0 bottom-0 max-w-20 lg:flex">
                <p id="email" className="hover:text-[#64ffda] rounded-full cursor-pointer font-mono rotate-90" onClick={copy}>mateusasilvacontato@gmail.com</p>
                <div className="h-40 w-[0.1rem] bg-[#e6f1ff] mt-[20ch]"></div>
            </div>
            
        
        
    )
}