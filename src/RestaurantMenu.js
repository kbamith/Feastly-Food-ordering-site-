import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResmenu from "../utility/useResmenu";
import RestautantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu=()=>{

    const {resId}=useParams();
    let description=useResmenu(resId);
   let[showindex,setShowindex]=useState(null)

    if(description==null)
        return <Shimmer/>

   const {name,costForTwoMessage,cuisines}=description?.data?.cards[2]?.card?.card?.info;
   const {itemCards}=description.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   let itemswithfilter=description.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards  
   
  let itemwithoutfilter=itemswithfilter.filter(elem=>elem.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")  

         

    // name 
    // price
    //description
    // imageId
   let CDN_DATA="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
   return(
    
      <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">{cuisines.join(", ") } - {costForTwoMessage}</h2>
      {
      itemwithoutfilter.map((category,index)=><RestautantCategory accordian={index==showindex?true:false} setClick={()=>showindex==index?setShowindex(null):setShowindex(index)}  key={category.card.card.title}  data={category?.card?.card}/>)
      
      }   
      </div>
   )
};
export default RestaurantMenu;

