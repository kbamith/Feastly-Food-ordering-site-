import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearcart } from "../utility/cartSlice.js";


const Cart =()=>{
    const dispatch=useDispatch();
    function handleclearcart(){
    dispatch(clearcart())
    }
    





    let cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    
    return(
        <div className="text-center m-4 p-4">
            
            <button className="p-2 m-1 ba bg-gray-500 rounded-lg text-white cursor-pointer" onClick={handleclearcart}>clear cart</button>
            <Itemlist Items={cartItems}/>
            {cartItems.length==0&&(<h2>Cart is empty.Add items to cart!</h2>)}
        </div>
    )
}
export default Cart;