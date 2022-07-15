import './Product.css';
import {BsFillPlayFill} from 'react-icons/bs';
const Product = ({id,title,image,status,price}) =>{
    let audio=new Audio("../public/music/g_minor_150bpm_southside_type_beat.mp3")
    const start=()=>{
        audio.play();
    }
return(
    <div className='product'>
        <div className='product__info'>
             <p>
                {title}
             </p>  
           <button className='product_player' onClick={start}></button>
             <p className='product__price'><strong>{price}<small>$</small></strong></p>
             <div className='product__rating'>status</div>
             <img src={image} alt=''></img>
             <button>Add to Basket</button>
        </div>
    </div>
)
}
export default Product;