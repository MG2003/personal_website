import { projData, projects } from "../../utils/proj_contents";
import Tags from "./tags";
import { Link } from "react-router-dom";



const imageFolder: string = "/images/projects/"

export default function ProjectTable(){
    return(
        <div>
            <div className = "overflow-y-scroll h-[36rem]">
                <div>My Projects</div>
                <div className = "flex flex-wrap">
                    {projects.map((project: projData) => 
                        <Link to= {"./" + project.pagepath} 
                            className = "bg-highlight p-4 m-4 flex-col hover:shadow-dft border-secondary border-2 h-fit">          
                            <div>
                                <img src = {imageFolder + project.imgpath} className = "w-fit max-w-sm"/>
                            </div>
                            <div className = "flex-shrink my-2">
                                <p className = "font-bold mb-1">{project.title}</p>
                                <Tags tagArr= {project.tags}/>
                            </div>              
                        </Link>       
                    )}
                </div>
            </div>
        </div>
    )
}



