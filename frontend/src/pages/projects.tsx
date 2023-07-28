import ProjectTable from "../layouts/projects/projectTable";
import { categories } from "../utils/proj_contents";




function Projects(){
    return(
        <div>
            {categories.map((category) =>
                <ProjectTable title = {category.title} props = {category.contents}/>
            )}

        </div>
        );
}



export default Projects;