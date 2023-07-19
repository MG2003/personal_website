

import { Outlet, Link, NavLink } from "react-router-dom";
import { pages } from "../utils/pages";


export default function Root() {
    return (
      <div>
        <header>
          <h1 className = "text-3xl font-bold"><Link to= "/">Max Guo</Link></h1>
          <p className = "font-semibold">hms is cool</p>
        </header>
        <Navigation/>
        <main className = "m-24 p-16 border-4 border-solid border-black">
          <Outlet/>
        </main>
        <Foot/>
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
    return(
      <ul>
        {pages.map((page, index) => 
          <NavLink 
            key = {index} 
            to={page.path}
            className = {({ isActive }) =>
              isActive ? "font-bold" : ""
          }
            >

              {page.title}

          </NavLink>)}
      </ul>
    )
  }