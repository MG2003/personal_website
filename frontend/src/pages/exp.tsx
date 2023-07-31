function Experience(){
    /*
    Should consist of a nicely laid out resume(with addition of my normal resume), also implement a navigation thing
    */
    return(
        <div>
            <h1 className = "text-8xl mb-4">Experience</h1>
        
            <section>
                <h1 className = "text-3xl mb-3">Education</h1>
            </section>

            <section>
                <h1 className = "text-3xl mb-3">Experience</h1>
            </section>

            <section>
                <h1 className = "text-3xl mb-3">Skills</h1>
            </section>






            <div>
                You can peep my resume here: <a href="/other_files/Resume-1.pdf" download className = "bg-secondary text-primary hover:bg-transparent hover:text-secondary hover:border-b-2 hover:border-b-secondary">download</a>
            </div>
        </div>

    );
}



function Navbar(){
    /* sections should include the basic resume stuff, I'll refactor later, 
    */

}
export default Experience;