'use client'
import { Menu, X  } from "lucide-react"
import { useState } from "react"


export function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className="flex justify-between w-full p-4 fixed">
            <p className="text-[#64ffda] m-2 text-xl ml-4">M.A.S</p>
            <nav>
                <ul className="hidden text-base items-center lg:flex">
                    <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Sobre mim</p></a></li>
                    <li><a href="#experience" className="hover:text-[#64ffda] flex m-2"><p>Experiências</p></a></li>
                    <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Projetos</p></a></li>
                    <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Contato</p></a></li>
                </ul>
                <div className="flex flex-col items-end transition-transform duration-1000 lg:hidden">
                    <div  className="" onClick={()=>setIsOpen(!isOpen)} >{isOpen ? <X/> : <Menu/>}</div>

                    {isOpen &&(
                        <ul className="flex flex-col text-base items-end lg:hidden">
                            <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Sobre mim</p></a></li>
                            <li><a href="#experience" className="hover:text-[#64ffda] flex m-2"><p>Experiências</p></a></li>
                            <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Projetos</p></a></li>
                            <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Contato</p></a></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}