
//pages
import About from './pages/about';
import BadURL from './pages/404'
import Home from './pages/home';

//broswer-router
import {

  createBrowserRouter,
  RouterProvider,
  Outlet,

} from "react-router-dom";

//react-icons
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";


const router = createBrowserRouter([
  {
      path: "/", 
      element: <Root />,
      errorElement: <BadURL/>,
      children: [
        {
          index: true,
          element: <About />,      
        },
        {
          path: "home",
          element: <Home />,
        }
      ]

},

]);

export default function App(){
  console.log("Hello world!");
  return( 
    <RouterProvider 
      router={router} /> 
  );
}

function Root() {
  return (
    <div>
      <header>
        <h1 className = "text-3xl font-bold">Max Guo</h1>
        <p className = "font-semibold">hms is cool</p>

      </header>
      <main className = "m-24 p-16 border-4 border-solid border-black">
        <Outlet/>
      </main>
      <footer className = "text-xs text-center">
            <p>You can find me in these places: </p>
            <div className = "flex text-s justify-center my-1">
              <a href = "https://github.com/MG2003" target="_blank" rel="noreferrer" ><BsGithub size={20} className = "fill-secondary"/></a>
              <a href = "https://www.linkedin.com/in/max-guo-3b0b1b20b/" target="_blank" rel="noreferrer" className = "px-2"><BsLinkedin size={20} className = "fill-secondary"/></a>
              <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><BsTwitter size={20} className = "fill-secondary"/></a>
            </div>
            <p>Made in React and Tailwind :)</p>
          </footer>
    </div>
  )
}




