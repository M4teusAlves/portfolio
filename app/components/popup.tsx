'use client'
import { X } from "lucide-react"



type Props = {
    show:boolean
}

export function PopUp(props:Props){


    return(
        <>
            {props.show &&(
                <div className="fixed flex items-center justify-center bottom-5 w-full">
                    <div className=" w-94 rounded-md backdrop-blur-2xl animate-pop-up text-[#64ffda] flex items-center justify-center gap-2" >
                        <p className="text-xl">Email Copiado!</p>
                    </div>
                </div>
                
            )}
        </>
        

        
    )
}