import Programmer from "../assets/img/programmer.png"

export function Home(){
    return(
        <section className=" flex h-screen items-center justify-center bg-fundo1 bg-cover" id="#">
            <div className="h-[70vh] p-28 flex gap-32 rounded-2xl shadow-xl">
                <section>
                    <h2 className="w-[23ch] font-sans text-4xl">Olá, eu sou <b className="text-[#008AAA]">Mateus Alves</b></h2>
                    <p></p>
                </section>
                <section>
                    <img src={Programmer} className="w-[30rem] animate-bounce-slow"/>
                </section>
            </div>
            
        </section>
    )
}