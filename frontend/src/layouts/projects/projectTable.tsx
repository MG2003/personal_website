import { projData } from "../../utils/proj_contents";
import Tags from "./tags";



const imageFolder: string = "/images/projects/"

interface data_Array{
    props: projData[];
    title: string;
}

export default function ProjectTable({props, title}:data_Array){
    return(
        <div>
            <p className = "text-xl font-bold">{title}</p>
            <div className = "inline-flex">
                {props.map((project: projData) => 
                    <a href= {project.link} target= "_blank" className = "bg-gray-100 rounded-md p-3 m-3 transition ease-in delay-100 hover:bg-gray-200 hover:scale-105 flex-col">          
                        <div className = "min-h flex-grow">
                            <img src = {imageFolder + project.path} className = "rounded-md max-w-sm"/>
                        </div>
                        <div className = "flex-shrink">
                            <p className = "font-bold mb-1">{project.title}</p>
                            <Tags tagArr= {project.tags}/>
                        </div>              
                    </a>       
                )}
            </div>
        </div>
    )
}


