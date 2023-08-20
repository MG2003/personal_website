import { projData, projects } from "../../utils/proj_contents";
import Tags from "./tags";



const imageFolder: string = "/images/projects/"

export default function ProjectTable(){
    return(
        <div>
            <div className = "inline-flex">
                {projects.map((project: projData) => 
                    <a href= {project.link} target= "_blank" 
                        className = "bg-highlight p-4 m-4 transition ease-in delay-0 hover:scale-105 flex-col hover:shadow-dft border-secondary border-2">          
                        <div className = "min-h flex-grow">
                            <img src = {imageFolder + project.path} className = "max-w-sm"/>
                        </div>
                        <div className = "flex-shrink my-2">
                            <p className = "font-bold mb-1">{project.title}</p>
                            <Tags tagArr= {project.tags}/>
                        </div>              
                    </a>       
                )}
            </div>
        </div>
    )
}



