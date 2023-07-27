import { Outlet, Link, NavLink } from "react-router-dom";
import { pages } from "../utils/pages";
import Clock from "../components/clock";


export default function Root() {
  Clock();
    return (
      <div className = "flex min-h-screen">
        <Sidebar/>
        <main className = "p-16 flex-grow">
          <Outlet/>
        </main>
       
      </div>
    )
  }

  function Sidebar(){
    return(
    <div className = "block bg-blue-200">
      <header>
        <h1 className = "text-3xl font-bold"><Link to= "/">Max Guo</Link></h1>
      </header>
      <Navigation/>
      <Foot/>
    </div>);
  }


  function Foot(){
    return(
      <footer className = "bg-orange-500 p-2">
        <p>Made with React and Tailwind</p>
      </footer>
    )
  }

  function Navigation(){
    const nav_class: string = " block p-3 rounded-lg my-3 "
    return(
      <ul className = "p-2">
        {pages.map((page, index) => 
          <NavLink 
            key = {index} 
            to={page.path}
            className = {({ isActive }) =>
              isActive ? "font-bold bg-orange-500" + nav_class : "bg-purple-400 hover:bg-orange-500 transition-colors ease-in" + nav_class
          }>

              {page.title}

          </NavLink>)}
      </ul>
    )
  }