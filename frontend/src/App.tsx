//broswer-router
import { RouterProvider } from "react-router-dom";
import { router } from './utils/routing';




export default function App(){
  console.log("Hello world!");
  return( 
    <RouterProvider 
      router={router} /> 
  );
}