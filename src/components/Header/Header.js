import React from "react"
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineShop} from 'react-icons/ai';
import {AiOutlineSearch} from'react-icons/ai';
import {Link} from 'react-router-dom';
import { useStateValue } from "../StateProvider/StateProvider";
const Header=()=>{
    const [{basket},dispatch] = useStateValue()
    return(
        <div className="header">
            <Link to="/" style={{textDecoration: "none"}} >
   <div className='header__logo'>
  <AiOutlineShop className="header__logoImage" fontSize="28"/>
   <h2 className='header__logoTitle'>Beat shop</h2>
    </div>
    </Link>
    <div className='header__search'>
<input type="text" className="header__searchInput"/>
<AiOutlineSearch className='header__searchImage' fontSize="24"/>
    </div>
    <div className='header__nav'>
        <Link to="/login" style={{textDecoration:"none"}}>
      <div className='nav__item'>
 <span className='nav__itemLineOne'>Welcome!</span>
 <span className='nav__itemLineTwo'>Sign in</span>
      </div>
      </Link>
      <div className='nav__item'>
 <span className='nav__itemLineOne'>Your</span>
 <span className='nav__itemLineTwo'>Shop</span>
      </div>
<Link to="/checkout" style={{textDecoration: "none"}}>

   <div className='nav__item'>
 <AiOutlineShoppingCart fontSize="large"/>
 <span className='nav__itemLineTwo nav__basketCount'>{basket.length}</span>
  </div>

</Link>
      
   
    </div>

        </div>
    )
}
export default Header