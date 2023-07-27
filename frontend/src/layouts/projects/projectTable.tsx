import { games, projData } from "./proj_contents";



const imageFolder: string = "/images/projects/"

export default function ProjectTable(){
    return(
        <div>
            <p className = "text-lg font-bold">Games</p>
            <div className = "inline-flex">
                {games.map((project: projData) => 
                    <div className = "bg-gray-100 rounded-md p-3 m-3 transition ease-in delay-100 hover:bg-gray-200 hover:scale-105 flex-col">
                        <a href= {project.link} target= "_blank">
                            <div className = "min-h flex-grow">
                                <img src = {imageFolder + project.path} className = "rounded-md max-w-sm"/>
                            </div>
                            <div className = "flex-shrink">
                                <p className = "font-bold mb-1">{project.title}</p>
                                <div className = "inline-flex">
                                    {
                                    project.tags.map((tag: string) => 
                                    <div className = "px-2 py-0.5 rounded-xl bg-gray-300 text-sm mr-1">
                                        <p>{tag}</p>
                                    </div>)
                                    }
                                </div>
                            </div>
                            
                        </a>
                    </div>           
                )}
            </div>
        </div>
    )
}

