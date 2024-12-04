import Dino from "../assets/dinossauro.gif"
import Curriculo from "../../public/next.svg"

export function Main(){
    return(
        <div className="flex w-full justify-center items-center h-[82vh]">
            <section className="flex w-[70%] flex-col items-start lg:w-[40%] mt-14">
                <p className="text-[#64ffda] lg:text-xl mb:text-lg">Olá, eu sou</p>
                <h1 className="lg:text-6xl mt-4 mb:text-2xl">Mateus Alves</h1>
                <p className="mt-10 lg:text-base text-sm"> Desenvolvedor Full Stack com experiência em construção de APIs e sistemas de gerenciamento utilizando
                    <b className="font-black"> PHP/Laravel, Java, Spring Boot, Vue.js, Angular, SQL Server e PostgreSQL. </b> 
                    Habilidades em desenvolvimento de projetos voltados para soluções locais e desktop. 
                    Capaz de conduzir projetos do planejamento à implementação com foco em eficiência e funcionalidade
                </p>
                <a href='/curriculo.pdf' download="mateusalvescurriculo.pdf" className="text-[#64ffda] mt-7 border-2 transition-shadow border-[#64ffda] rounded-md p-4 hover:shadow-[#64ffda] hover:shadow-lg lg:text-base">Download CV</a>
                <div className="flex"></div>
            </section>
            <img src={Dino.src} className="w-[30%] ml-10 hidden lg:block"/>
        </div>
        
    )
}