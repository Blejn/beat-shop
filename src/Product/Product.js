import './Product.css';
import { useStateValue } from '../components/StateProvider/StateProvider';
import {BsFillPlayFill} from 'react-icons/bs';
import {AiFillPlayCircle} from'react-icons/ai';
const Product = ({id,title,image,status,price,audio}) =>{

    const start=()=>{
        audio.play();
    }

    const[state, dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                image: image,
                title: title,
                price:price,
                status:status
            },

         } );
    };
return(
   
    <div className='card'>
        <div className='imgBox'>
 <img src={image} className="photo"/>

        </div>
      
        <div className='contentBox'>
             <h3> {title} </h3>  
            <h2 className='price'><strong>{price}</strong><small>$</small></h2>
           <button className='product__play' onClick={start}><AiFillPlayCircle className='icon-play'/> </button>

             <h3 className='product__rating'>{status}</h3>
             <button className='product__buy' onClick={addToBasket}>Add to Basket</button>
        </div>
    </div>
)
}
export default Product;