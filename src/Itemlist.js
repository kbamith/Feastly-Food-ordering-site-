import React from 'react'
import { CDN_DATA } from './utils';
import { useDispatch } from 'react-redux';
import { addItem } from '../utility/cartSlice';
export default function Itemlist({Items}) {
 

let uniqueitems=new Set();
const dispatch=useDispatch()  



function handleadditem(item){

 dispatch(addItem(item)) 
}



  
    return (
    <div>
{
Items.map((item)=>(
    <div key={item.card.info.id} className='p-2 m-2  border-gray-400   border-b-2 text-left flex justify-between'>

        <div className='w-9/12'>
         <div className='py-2 text-wrap'>
            <span  className='py-2'>{item.card.info.name}</span>
            <span > -- ₹ { item.card.info.price?(item.card.info.price)/100 : (item.card.info.defaultPrice)/100 }
            </span>
          </div>
          <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div className='w-4/12 p-4'>
          <img src={CDN_DATA+item.card.info.imageId} className='w-full' />
          <div > <button className='bg-gray-300 px-2.5 items-center cursor-pointer hover:bg-gray-400' onClick={()=>{


           if(!uniqueitems.has(item.card.info.id)){
             uniqueitems.add(item.card.info.id)
            handleadditem(item)}}}>Add</button></div>
           
          </div>  
          
    </div>
))}
    </div>
  )
}



