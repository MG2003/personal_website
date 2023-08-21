import { pages } from "../../utils/pages";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Topbar(){
    return(
    <div className = " text-xl w-screen top-0 sticky h-full my-auto flex bg-primary z-50 px-4 py-[0.125rem] border-secondary border-y-2 mt-2">
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
              isActive ? "activenav nav" :  "inactivenav nav"
          }>
              {page.title}
          </NavLink>)}
      </ul>
    )
  }
