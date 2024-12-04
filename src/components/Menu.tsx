import Logo from "../assets/img/Logo.png"

export function Menu(){
    return(

        <nav className=" h-20 flex justify-between px-36 items-center fixed w-full">
            
            <img src={Logo} className="h-20"/>

            <ul className="flex items-center text-md font-['Work Sans'] font-medium h-full">
               <li className="h-full w-28 hover:bg-[#008AAA] hover:text-white transition duration-500"><a href="#" className=" flex p-2 w-full h-full justify-center items-center">Home</a></li>
               <li className="h-full w-28 hover:bg-[#008AAA] hover:text-white transition duration-500"><a href="#experience" className=" flex p-2 w-full h-full justify-center items-center">Experiência</a></li>
               <li className="h-full w-28 hover:bg-[#008AAA] hover:text-white transition duration-500"><a href="" className=" flex p-2 w-full h-full justify-center items-center">Projetos</a></li>
               <li className="h-full w-28 hover:bg-[#008AAA] hover:text-white transition duration-500"><a href="" className=" flex p-2 w-full h-full justify-center items-center">Educação</a></li>
               <li className="h-full w-28 hover:bg-[#008AAA] hover:text-white transition duration-500"><a href="" className=" flex p-2 w-full h-full justify-center items-center">Contato</a></li> 
            </ul>
        </nav>

    )
}