//pages
import About from '../pages/about';
import BadURL from '../pages/404'
import Home from '../pages/home';
import Experience from '../pages/exp';
import Projects from '../pages/projects';
import Experimental from '../pages/experimental';

//Root Layout
import Root from '../layouts/root/RootLayout';

//Browser Router
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Root />,
        errorElement: <BadURL/>,
        children: [
          {
            index: true,
            element: <Home />,      
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "experience",
            element: <Experience/>
          },
          {
            path: "projects",
            element: <Projects />
          },
          {
            path: "fun",
            element: <Experimental/>
          }
        ]
  
  },
  
  ]);