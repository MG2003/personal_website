//pages
import About from '../pages/about';
import BadURL from '../pages/404'
import Home from '../pages/home';
import Experience from '../pages/exp';
//experience subcategories
import Education from '../pages/experience_sections/edu';
import Work from '../pages/experience_sections/work';
import Skills from '../pages/experience_sections/skills';


import Projects from '../pages/projects';
//Individual project pages
import ProjectPage from '../pages/projectPage';
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
            element: <Experience/>,
            children: [
              {
                path: "education",
                element: <Education/>
              },
              {
                path: "work",
                element: <Work/>
              },
              {
                path: "skills",
                element: <Skills/>
              }
            ]
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "projects/:projectId",
            element:<ProjectPage/>
          },
          {
            path: "fun",
            element: <Experimental/>
          }
        ]
  
  },
  
  ]);