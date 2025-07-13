import React from "react";
import { useState } from "react";
import Itemlist from "./Itemlist";


let RestautantCategory=({data,accordian,setClick})=>{
function handleclick(){
setClick();
}


    return (
     <div>
        <div className="bg-gray-100 shadow-lg p-4 w-6/12  mx-auto  my-4">
        <div className=" flex justify-between" onClick={handleclick}>
        <span className="font-bold text-lg cursor-pointer" >
        {data.title }({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>
        
         { accordian && <Itemlist Items={data.itemCards}/>}
         
        </div>
        </div>

    
    
) 
}
export default RestautantCategory;
