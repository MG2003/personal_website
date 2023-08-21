



function Experience(){
    /*
    Should consist of a nicely laid out resume(with addition of my normal resume), also implement a navigation thing, have some nice widgets for skills or smth(inspired by the mldangelo site)
    */
   
    return(
        <div className = "h-[36rem]  overflow-y-scroll">
            <div className = "p-2 pt-4 ">
            <div>⚠️Under construction!!!⚠️</div>
            <p>This is where I'm gonna put a pretty display of my resume(with graphics!!!)</p>
            <div>
                Resume in pdf form: <a href="/other_files/Resume-1.pdf" download className = "bg-secondary text-primary hover:bg-transparent hover:text-secondary hover:border-b-2 hover:border-b-secondary">download</a>
            </div>
            </div>


           
        </div>

    );
}




/*
function Navbar(){

   return(
    <ul className = "pt-1 text-xl top-0 bg-secondary text-primary border-b-secondary border-b-2 sticky" >
        {categories.map((category: resumeCategory, index) =>
        <li key = {index} className = "inline p-2 bg-transparent">
            {category.name}</li>
        )}
    </ul>
   );

}
interface resumeCategory{
    name: string;
    path: string;
}

const categories:resumeCategory[] = [
    {
        name: "Education",
        path: "education"
    },
    {
        name: "Experience",
        path: "experience"
    },
    {
        name: "Skills",
        path: "skills"
    }
]



interface headstr{
    txt: string
}

function SectionHead({txt}: headstr){
    return(
    <h1 className = "text-3xl">{txt}</h1>
    );
}*/
export default Experience;