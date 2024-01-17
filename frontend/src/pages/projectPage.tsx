import { projects } from "../utils/proj_contents";
import { useParams, Link} from "react-router-dom";
import Tags from "../layouts/projects/tags";

const imageFolder: string = "/images/projects/";

export default function ProjectPage(){
    
    const  index = loadProject();
    if (index == undefined){
        return(
            <div>
                <Link to = "/projects" className = "p-2 bg-secondary text-primary">Back</Link>
                <div>Not found</div>
            </div>
        )
    }
    const project = projects[index];
    const l = projects.length
    let backpath;
    if(index == 0){
        backpath = projects[l - 1].pagepath
    }
    else{
        backpath = projects[(index-1)%l].pagepath
    }
    const nextpath = projects[(index+1)%l].pagepath
   
    return(
        <div className = "flex">
            <div>
                <div className = "p-2 bg-secondary text-primary h-fit hover:bg-primary hover:text-secondary mb-6"><Link to = "/projects" >Back</Link></div>
                <div className = " justify-center">
                    <Link to = {"/projects/" + backpath} className = "p-2 bg-secondary text-primary h-fit hover:bg-primary hover:text-secondary ">{"<-"}</Link>
                    <Link to = {"/projects/" + nextpath} className = "p-2 bg-secondary text-primary h-fit hover:bg-primary hover:text-secondary ">{"->"}</Link>
                </div>
            </div>
            <div className = "ml-5">
                <h1 className = "text-3xl mb-4">{project.title}</h1>
                <div className = "mb-4">
                    <Tags tagArr= {project.tags} />
                </div>
                <img src = {imageFolder + project.imgpath} className = "max-w-sm md:max-w-md"></img>
                <div className = "py-2 mb-2">
                    <p>{project.desc}</p>
                </div>
                <a href = {project.link} target = "_blank" className = "bg-secondary p-1 text-primary hover:bg-primary hover:text-secondary">Link</a>
            </div>

        </div>
    );
}



function loadProject(){
    const { projectId }= useParams();

    console.log("this.context:",  projectId );
    const getProject = () => {
        for (let i = 0; i < projects.length; i++){
            if (projects[i].pagepath === projectId){
                return i
            }
        }
    }

    return getProject();
}