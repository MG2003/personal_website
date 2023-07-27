import ProjectTable from "../layouts/projects/projectTable";
import { games } from "../layouts/projects/proj_contents";

function Projects(){
    return(
        <div>
            <p className = "text-xl font-bold">Games</p>
            <ProjectTable props = { games }/>
        </div>
        );
}

export default Projects;