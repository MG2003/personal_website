import { Outlet, NavLink } from "react-router-dom";

const categories:resumeCategory[] = [
    {
        name: "Work",
        path: "work"
    },
    {
        name: "Skills",
        path: "skills"
    }
]

function Experience(){
    /*
    Should consist of a nicely laid out resume(with addition of my normal resume), also implement a navigation thing, have some nice widgets for skills or smth(inspired by the mldangelo site)
    */
   
    return(
        <div className = "h-[36rem]  overflow-y-scroll">
            <Navbar/>
            <div className = "p-2 pt-4 ">
            <Outlet/>
            <div>
                Resume in pdf form: <a href="/other_files/Resume-1.pdf" download className = "bg-secondary text-primary hover:bg-transparent hover:text-secondary hover:border-b-2 hover:border-b-secondary">download</a>
            </div>
            </div>


           
        </div>

    );
}

interface resumeCategory{
    name: string;
    path: string;
}



function Navbar(){
    /* sections should include the basic resume stuff, I'll refactor later, 
    */
   return(
    <ul className = "pt-1 text-xl top-0 bg-secondary text-primary border-b-secondary border-b-2 sticky" >
        {categories.map((category: resumeCategory, index) =>
        <li key = {index} className = "inline p-2 bg-transparent">
            <NavLink to = {"./" + category.path}
                className = {({ isActive }) =>
                isActive ? "activenav" :  ""
        }
            >
                {category.name}
                </NavLink>
            
            </li>
        )}
    </ul>
   );

}
export default Experience;