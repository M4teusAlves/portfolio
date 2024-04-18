import { title } from "process";
import { projects } from "./data";
import { Project } from "./project";

type Props = {
    image:string;
    title:string;
    description:string;
    responsive:boolean;
    technology:string;
    application:string;
    repository:string;
}

export function Projects(){
    return(
        <section className="min-h-screen w-full p-4 flex flex-col items-center justify-center" id='projects'>
            <h2 className="text-lg text-[#64ffda] mb-3">Projetos</h2>
            <ul className="w-[80%]">
                {projects.map((project:Props)=>(
                    <Project 
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        responsive={project.responsive}
                        technology={project.technology}
                        application={project.application}
                        repository={project.repository}
                    />
                ))}
            </ul>
        </section>
    )
}