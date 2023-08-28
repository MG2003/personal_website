import { projects } from "../utils/proj_contents";
import { useParams, Link} from "react-router-dom";
import Tags from "../layouts/projects/tags";

const imageFolder: string = "/images/projects/";

export default function ProjectPage(){
    
    const project = loadProject();

    if (project == undefined){
        return(
            <div>undefined oops</div>
        )
    }
    else{
        return(
            <div>
                <Link to = "../">Back</Link>
                <h1 className = "text-xl">{project.title}</h1>
                <img src = {imageFolder + project.imgpath} className = "max-w-md"></img>
                <Tags tagArr= {project.tags}/>
                <p>{project.desc}</p>
                <a href = {project.link} target = "_blank">Link</a>

            </div>
        );
    }

}

function loadProject(){
    const { projectId }= useParams();

    console.log("this.context:",  projectId );
    const getProject = () => {
        for (let i = 0; i < projects.length; i++){
            if (projects[i].pagepath === projectId){
                return projects[i]
            }
        }
    }

    return getProject();
}