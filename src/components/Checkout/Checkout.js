import React from "react"
import './Checkout.css'
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"
import Subtotal from "../Subtotal/Subtotal"
import { useStateValue } from "../StateProvider/StateProvider"

const Checkout = () =>{
  const [{basket}, dispatch] = useStateValue();
    return(
        <div className="checkout">
           <div className="checkout__left">
             <img src="" alt="" className="checkout__ad"/>
           </div>
           <div className="title">
           <h2 className="checkout__title">
            Your products
           </h2>
           
           </div>
                 <div className="checkout__right">
            <Subtotal/>

           </div>
           
           {basket.map(item =>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            status={item.status}
            price={item.price}
            
            
            />
           ) )

           }
     
        </div>
    )
}
export default Checkout