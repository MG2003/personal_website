import { pages } from "../../utils/pages";
import { Link, NavLink } from "react-router-dom";
export default function Topbar(){
    return(
    <div className = " text-xl max-w-screen top-0 sticky h-full my-auto flex bg-primary z-50 px-4 py-[0.125rem] border-secondary border-b-2 mt-2">
      <header>
        <h1 className = "font-bold text-secondary hover:italic"><Link to= "/">Max Guo</Link></h1>
      </header>
      
      <div className = "ml-auto">
        <Navigation/>
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
              isActive ? "activenav nav" :  "nav"
          }>
              {page.title}
          </NavLink>)}
      </ul>
    )
  }
