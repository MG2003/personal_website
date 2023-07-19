

import { Outlet } from "react-router-dom";


export default function Root() {
    return (
      <div>
        <header>
          <h1 className = "text-3xl font-bold">Max Guo</h1>
          <p className = "font-semibold">hms is cool</p>
  
        </header>
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