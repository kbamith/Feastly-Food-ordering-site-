import { Link } from "react-router-dom";
import {str} from "./utils"
import { useState,useContext} from "react";
import UserContext from "./Usercontext";
import { useSelector } from "react-redux";
const Logo = new URL('./assets/Logo.png', import.meta.url).href;
export const Headers=()=>{
   let [statevariable,setstate]=useState("Login");
  let {loggedInUser}=useContext(UserContext)

  const cartItems=useSelector((store)=>store.cart.items)


    return(
       <div className="flex justify-between bg-gray-200 shadow-lg"> 
        <div>
        <img src={Logo} alt="Feastly logo" className="w-35"/>
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4">
             <li className="px-5 hover:bg-orange-600 p-1 rounded-sm hover:text-white"><Link to="/">Home</Link></li>
             <li className="px-5 hover:bg-orange-600 p-1 rounded-sm hover:text-white"><Link to="/about">About us</Link></li>
             <li className="px-5 hover:bg-orange-600 p-1 rounded-sm hover:text-white"><Link to="/contact">Contact us</Link></li>
             
             <li className="hover:bg-orange-600 p-1 rounded-sm  px-4 "><Link to='/cart'>🛒({cartItems.length})</Link></li>
             <button className="hover:bg-orange-600 p-1 rounded-sm px-4 hover:text-white" onClick={()=>{
               statevariable==="Login" ? setstate("Logout"):setstate("Login")
             }}>
               {statevariable}
             </button>
             <li className="font-bold px-4 p-1">{loggedInUser}</li>
          </ul>
          
        </div>
        </div>
 
    );
 };
 export default Headers;