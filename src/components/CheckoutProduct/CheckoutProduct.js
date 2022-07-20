import React from "react"
import'./CheckoutProduct.css'
import {MdRemoveCircleOutline} from 'react-icons/md'
import {MdOutlineTaskAlt} from 'react-icons/md'
import { useStateValue } from "../StateProvider/StateProvider"
const CheckoutProduct = ({id,title,status,price,image}) =>{
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket =()=>{
       dispatch({
         type:"REMOVE_FROM_BASKET",
         id:id,
       })
    }
   
   return(
   <div className='checkoutProduct'>
    <div className='card-checkout'>
        <div className='imgBox'>
 <img src={image} className="photo"/>

        </div>
      
        <div className='contentBox'>
             <h3> {title} </h3>  
            <h2 className='price'><strong>{price}</strong><small>$</small></h2>
  

<button className="checkout_remove" onClick={removeFromBasket}>Remove</button>

   </div>
   
    </div>
    </div>
    )
}
export default CheckoutProduct