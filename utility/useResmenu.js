import { Menudata } from "../src/utils";
import { useState,useEffect } from "react";
const useResmenu=(resId)=>{
const [resInfo,setresInfo]=useState(null);
 useEffect(()=>
    {fetchdata()},[]);
 const fetchdata=async()=>{
let data= await fetch(Menudata+resId);
let json=await data.json();
setresInfo(json);
 }
return resInfo;
}
export default useResmenu;