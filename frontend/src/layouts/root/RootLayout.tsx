import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Root() {
    return (
      <div className = "flex min-h-screen text-secondary">
        <Sidebar/>
        <main className = "p-16 flex-grow bg-primary ml-72">
          <Outlet/>
        </main>
       
      </div>
    )
  }

  