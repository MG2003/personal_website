import { pages } from "../../utils/pages";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar(){
    return(
    <div className = " text-lg w-screen top-0 sticky h-full my-auto flex bg-primary z-50 px-4 border-secondary border-b-2">
      <header>
        <h1 className = "font-bold text-secondary hover:italic"><Link to= "/">Max Guo</Link></h1>
      </header>
      <Navigation/>
      <div className = "ml-auto">
        <p>linx</p>
      </div>


    </div>);
  }

  function Navigation(){
    return(
      <ul className = "inline-block">
        {pages.map((page, index) => 
          <NavLink 
            key = {index} 
            to={page.path}
            className = {({ isActive }) =>
              isActive ? "activenav nav" :  "inactivenav nav"
          }>
              {page.title}
          </NavLink>)}
      </ul>
    )
  }
