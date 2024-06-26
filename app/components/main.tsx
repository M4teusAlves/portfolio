import Dino from "../assets/dinossauro.gif"

export function Main(){
    return(
        <div className="flex w-full justify-center items-center h-screen">
            <section className="flex w-[70%] flex-col items-start lg:w-[40%]">
                <p className="text-[#64ffda] lg:text-xl mb:text-lg">Olá, eu sou</p>
                <h1 className="lg:text-6xl mt-4 mb:text-2xl">Mateus Alves</h1>
                <p className="mt-10 lg:text-base text-sm"> Sou um estudante de Análise e Desenvolvimento de Sistemas, 
                apaixonado por tecnologia e dedicado ao desenvolvimento tanto de front-end quanto de back-end. 
                Com uma sólida compreensão dos fundamentos da programação e interesse contínuo nas últimas tendências tecnológicas, 
                estou sempre buscando aprimorar minhas habilidades.
                </p>
                <button className="text-[#64ffda] mt-7 border-2 transition-shadow border-[#64ffda] rounded-md p-4 hover:shadow-[#64ffda] hover:shadow-lg lg:text-base">Download CV</button>
                <div className="flex"></div>
            </section>
            <img src={Dino.src} className="w-[30%] ml-10 hidden lg:block"/>
        </div>
        
    )
}