import { Outlet, Link, NavLink } from "react-router-dom";
import { pages } from "../utils/pages";
import Clock from "../components/clock";


export default function Root() {
  Clock();
    return (
      <div className = "flex min-h-screen">
        <Sidebar/>
        <main className = "p-16 flex-grow bg-primary">
          <Outlet/>
        </main>
       
      </div>
    )
  }

  function Sidebar(){
    return(
    <div className = "block bg-black">
      <header>
        <h1 className = "text-3xl font-bold text-primary p-3"><Link to= "/">Max Guo</Link></h1>
      </header>
      <Navigation/>
      <Foot/>
    </div>);
  }


  function Foot(){
    return(
      <footer className = "text-sm text-primary p-3">
        <p>Made with React and Tailwind</p>
      </footer>
    )
  }

  function Navigation(){
    const nav_class: string = " block p-3 my-4 min-w-md border-primary border-2"
    return(
      <ul className = "p-4">
        {pages.map((page, index) => 
          <NavLink 
            key = {index} 
            to={page.path}
            className = {({ isActive }) =>
              isActive ? "font-bold bg-black text-primary" + nav_class : "bg-primary hover:bg-black hover:text-primary transition-colors ease-in" + nav_class
          }>

              {page.title}

          </NavLink>)}
      </ul>
    )
  }