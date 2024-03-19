'use client'
import { X } from "lucide-react"



type Props = {
    show:boolean
    onShow:()=>void
}

export function PopUp(props:Props){

    function close(){
        props.onShow()
    }

    return(
        <>
            {props.show &&(
                <div className="fixed bottom-5 w-full">
                    <div className="animate-pop-up text-[#64ffda] flex items-center justify-center gap-2" >
                        <p className="text-xl">Email Copiado!</p>
                        <X className="hover:text-red-600" onClick={close}/>
                    </div>
                </div>
                
            )}
        </>
        

        
    )
}