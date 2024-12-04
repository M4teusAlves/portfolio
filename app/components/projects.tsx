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
        <section className="min-h-screen w-full p-4 pt-20 flex flex-col items-center" id="projects">
            <h2 className="text-xl text-[#64ffda] mb-3">Projetos</h2>
            <ul className="w-[90%] flex flex-wrap justify-center lg:justify-start lg:ml-32 lg:w-[80%] gap-3">
                {projects.map((project:Props)=>(
                    <Project
                        key={project.title}
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