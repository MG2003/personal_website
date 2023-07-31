import { pages } from "../../utils/pages";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar(){
    return(
    <div className = "block bg-secondary min-w-fit">
      <header>
        <h1 className = "text-3xl font-bold text-primary px-6 py-3 hover:italic mb-3"><Link to= "/">Max Guo</Link></h1>
      </header>
      <Navigation/>
      <Foot/>
    </div>);
  }

  function Navigation(){
    const nav_class: string = " block p-3 mb-4 min-w-md border-primary border-2"
    return(
      <ul className = "p-4">
        {pages.map((page, index) => 
          <NavLink 
            key = {index} 
            to={page.path}
            className = {({ isActive }) =>
              isActive ? "font-bold bg-secondary text-primary" + nav_class : "bg-primary hover:bg-secondary hover:text-primary" + nav_class
          }>

              {page.title}

          </NavLink>)}
      </ul>
    )
  }

  function Foot(){
    return(
      <footer className = "text-sm text-primary p-3 bottom-auto">
        <p>Made with React and Tailwind</p>
      </footer>
    )
  }