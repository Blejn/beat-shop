import React from "react"
import './Header.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineShop} from 'react-icons/ai';
import {AiOutlineSearch} from'react-icons/ai';

const Header=()=>{
    return(
        <div className="header">
   <div className='header__logo'>
  <AiOutlineShop className="header__logoImage" fontSize="28"/>
   <h2 className='header__logoTitle'>Beat shop</h2>
    </div>
    <div className='header__search'>
<input type="text" className="header__searchInput"/>
<AiOutlineSearch className='header__searchImage' fontSize="24"/>
    </div>
    <div className='header__nav'>
      <div className='nav__item'>
 <span className='nav__itemLineOne'>Welcome!</span>
 <span className='nav__itemLineTwo'>Sign in</span>
      </div>
      <div className='nav__item'>
 <span className='nav__itemLineOne'>Your</span>
 <span className='nav__itemLineTwo'>Shop</span>
      </div>
      <div className='nav__item'>
 <AiOutlineShoppingCart fontSize="large"/>
 <span className='nav__itemLineTwo nav__basketCount'>0</span>
      </div>
    </div>

        </div>
    )
}
export default Header