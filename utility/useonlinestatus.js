import { useState,useEffect } from "react";
const useOnlinestatus=()=>{
let[onlinestatus,setonlinestatus]=useState(true);

useEffect(()=>{
window.addEventListener("online",()=>{setonlinestatus(true)});
window.addEventListener("offline",()=>{setonlinestatus(false)});

},[]);

return onlinestatus;

}
export default useOnlinestatus;