import Recstrocard ,{withPromotedLabale}from "./Restrocard";
import { SWIGGY_API } from "./utils";
import { useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utility/useonlinestatus";

import { useEffect, useState } from "react";
let  Body=()=>{
const[list_of_restaurant,setList]=useState([]);
const[filtredrestro,setfiltered]=useState([]);
let [searced,setsearched]=useState("");

useEffect(()=>{
   fetchdata();
},[]);

const fetchdata=async ()=>{
   const data=await fetch(SWIGGY_API);
   const json=await data.json();
    setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfiltered(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


 let onlinestatus=useOnlinestatus();
 if(onlinestatus==false){
   return(
      <>
      <h1>Looks like your offline check your connection</h1>
      </>
   )
 }
 
let Restaurantwithpromoted=withPromotedLabale(Recstrocard);

    return (list_of_restaurant?.length)===0?<Shimmer/>:
     <div>
         <div className="flex justify-center  mt-4">
         <input type="text"
         className="border-orange-400 py-1 px-8 border rounded-lg placeholder:text-gray-500"
         placeholder="Search restaurant..."
          value={searced}
         onChange={(e)=>setsearched(e.target.value)}/>
         
         <button 
         className="bg-orange-600 px-4 py-1 rounded-lg  hover:bg-orange-700 text-white" 
         onClick={()=>{
        let new_rstros =   list_of_restaurant?.filter((res)=>{
               let restroname= res.info?.name;
             return  restroname.toLowerCase().includes(searced.toLowerCase());
            })
            setfiltered(new_rstros);
            setsearched("")
         }} 
        >Search</button>
         </div>
         
        <div className="flex flex-wrap"> 
         {
            filtredrestro?.map((resto)=>(
             <Link key={resto.info.id} to={"/restaurants/"+resto.info.id} > 
             {resto.info.promoted?<Restaurantwithpromoted resdata={resto}/>: <Recstrocard  resdata={resto}/>}
            </Link> 
            )
            )
         }
        </div>
     </div>
   
 }
export default Body; 