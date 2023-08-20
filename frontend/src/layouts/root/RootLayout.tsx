import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


export default function Root() {
    return (
      <div className = "flex min-h-screen text-secondary p-16">
        <Sidebar/>
          <div className = "flex-grow bg-primary ml-72 border-2 border-secondary h-full min-h-96">
            <Outlet/>
          </div>
      </div>
    )
  }

  