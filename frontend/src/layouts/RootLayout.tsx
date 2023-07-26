

import { Outlet, Link, NavLink } from "react-router-dom";
import { pages } from "../utils/pages";


export default function Root() {
    return (
      <div className = "flex border-black border-4 p-10">
        <div className = "block">
          <header>
            <h1 className = "text-3xl font-bold"><Link to= "/">Max Guo</Link></h1>
          </header>
          <Navigation/>
          <Foot/>
        </div>
        <main className = "p-16 border-4 border-solid border-black flex-grow ml-10">
          <Outlet/>
        </main>
       
      </div>
    )
  }


  function Foot(){
    return(
      <footer>
        <p>Made with React and Tailwind</p>
      </footer>
    )
  }

  function Navigation(){
    const nav_class: string = "block"
    return(
      <ul>
        {pages.map((page, index) => 
          <NavLink 
            key = {index} 
            to={page.path}
            className = {({ isActive }) =>
              isActive ? "font-bold " + nav_class : nav_class
          }
            >

              {page.title}

          </NavLink>)}
      </ul>
    )
  }