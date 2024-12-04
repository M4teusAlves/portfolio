export function Footer(){
    return(
        <footer className="h-44 w-full lg:w-10/12 flex items-center justify-between lg:px-24 border-t-2 ">
            <nav>
                <ul>
                    <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Sobre mim</p></a></li>
                    <li><a href="#experience" className="hover:text-[#64ffda] flex m-2"><p>Experiências</p></a></li>
                    <li><a href="#projects" className="hover:text-[#64ffda] flex m-2"><p>Projetos</p></a></li>
                    <li><a href="#skills" className="hover:text-[#64ffda] flex m-2"><p>Habilidades</p></a></li>
                    <li><a href="#" className="hover:text-[#64ffda] flex m-2"><p>Contato</p></a></li>
                </ul>
            </nav>
            <ul>
                <li className="flex"><b>Contatos</b></li>
                <li><a href="https://www.linkedin.com/in/mateus-alves-979672250/" target="blank" className="hover:text-[#64ffda] flex m-2"><p>Linkedin</p></a></li>
                <li><a href="https://github.com/M4teusAlves" target="blank" className="hover:text-[#64ffda] flex m-2"><p>Github</p></a></li>
                <li className="flex m-2"><p>mateusasilvacontato@gmail.com</p></li>

            </ul>
        </footer>
    )
}