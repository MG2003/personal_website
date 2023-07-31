import { NavLink } from "react-router-dom";
export default function Home(){
    /*Basic explanation of what this page is about */
    
    return(
        <div>
            <div className = "mb-4">
                <h1 className = "text-8xl font-bold">Hi! I'm Max</h1>
                <p className = "text-4xl">Welcome to my website :)</p>
            </div>
            <div>
                <h2 className = "text-3xl px-2 bg-secondary text-primary w-fit">A quick intro</h2>
                <p>I'm currently a student at Brown University, studying Computer Science and Math. 
                </p>
                <p>Outside of the classroom, I'm interested in digital art, game development, and animation.  </p>
                <p>You can find more about me <NavLink to = "/about" className = "font-bold">here</NavLink></p>
            </div>
            <div>
                <h2 className = "text-3xl px-2 bg-secondary text-primary w-fit">What is this website for?</h2>
                <p>This little corner of the internet is for me to tinker with webdev</p>
            </div>
        </div>
    );
}