import { CDN_DATA } from "./utils";
const Recstrocard=(props)=>{
  const {resdata}=props; 
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    avgRating,
    cuisines
  }=resdata?.info;

    return(
       <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 ">
          <img alt="food" className="rounded-lg" src={CDN_DATA + cloudinaryImageId}/>
          <h3 className="font-bold py-2 text-lg">{name}</h3>
          <h3>{cuisines.join(' , ')}</h3>
          <h3>{costForTwo}</h3>
          <h3>{avgRating} ⭐</h3>
        </div>
    )
 
 }
 export const withPromotedLabale=(Recstrocard)=>{
  return (props)=>{
      return(<div>
        <label>Promoted</label>
        <Recstrocard {...props}/>
      </div>)
  }
}
 


 export default Recstrocard;