import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


export default function Root() {
    return (
      <div className = "text-secondary overflow-hidden">
        <Sidebar/>
        <div className = "p-8">
          <div className = " bg-primary border-2 border-secondary h-[36rem]">
            <Outlet/>
          </div>
          <Foot/>
        </div>
      </div>
    )
  }

  

  function Foot(){
    return(
      <footer className = "text-sm text-secondary bottom-auto">
        <p>Made with React and Tailwind</p>
      </footer>
    )
  }