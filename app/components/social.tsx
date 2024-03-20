import { Github} from "lucide-react"
import { LinkedinIcon } from "lucide-react"

export function Social(){
    return(
        <div className="fixed flex-col items-center bottom-0 left-0 max-w-20 hidden lg:flex">
            <a href="https://github.com/M4teusAlves" target="blank" className="hover:text-[#64ffda] rounded-full"><Github/></a>
            <a href="https://www.linkedin.com/in/mateus-alves-979672250/" target="blank" className="hover:text-[#64ffda] rounded-full m-6"><LinkedinIcon/></a>
            <div className="h-40 w-[0.1rem] bg-[#e3e4e6]"></div>
        </div>
    )
}