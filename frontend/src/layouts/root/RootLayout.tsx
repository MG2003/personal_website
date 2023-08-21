import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";


export default function Root() {
    return (
      <div className = "text-secondary ">
        <Topbar/>
        <div className = "p-8">
          <div className = " bg-primary h-[36.175rem] pb-1 border-secondary border-solid border-2">
            <Outlet/>
          </div>
          <Foot/>
        </div>
      </div>
    )
  }

  

  function Foot(){
    return(
      <footer className = "text-sm text-secondary">
        <p>Made with React and Tailwind</p>
      </footer>
    )
  }