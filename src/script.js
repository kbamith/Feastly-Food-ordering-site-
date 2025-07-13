import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Headers from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import { lazy } from "react";
import { Suspense } from "react";
import { Provider } from "react-redux";
import Appstore from "../utility/Appstore";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";
import { BrowserRouter } from "react-router-dom";


const Contact=lazy(()=>import("./Contact"));


const AppLayout=()=>{

   return(
  
   <Provider store={Appstore}>
   <div className="App">
   <Headers/>
   <Outlet/>
   </div>
   </Provider>

   )
}
const approuter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>
         },

         {
            path:"/about",
            element:<About/>
           },  
           {
            path:"/contact",
            element:<Contact/>
           },
           {
             path:"/restaurants/:resId", //: means the resId is dynamic 
             element:<RestaurantMenu/> 
           },
           {
             path:"/cart",
             element:<Cart/>
           }
      ],
      errorElement:<Error/>
  },


]);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={approuter}/>);