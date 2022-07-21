import React from'react';
import './Home.css';
import {AiOutlineSound} from'react-icons/ai'
import Product from '../../Product/Product';
import DaBabyPhoto from '../assets/images/Da_Baby.jpeg'
import JackkHarlowPhoto from '../assets/images/Jack_Harlow.jpg'
import LilTjayPhoto from '../assets/images/Lil_tjay.jpg'

const Home = () => {
return(
    <div>
 <div className='home'>
  
    <div className='home_container'>
      
        <div className='home__row'>
          <div className='home__product'>
           <Product
           id="12345"
           title="DaBaby type beat "
           price={19.99}
           reating={5}
           status="For sale"
          image={DaBabyPhoto}  
          />
          </div>
              <div className='home__product'>
           <Product
           id="12345"
           title="Lil tjay type beat "
           price={19.99}
           reating={5}
           status="For sale"
         image={LilTjayPhoto}        
               />
               </div>
        </div>
        <div className='home__row'>
              <div className='home__product'>
          <Product
           id="12345"
           title="Jack Harlov type beat "
           price={19.99}
           reating={5}
           status="For sale"
          image={JackkHarlowPhoto}          
           />
           </div>
               <div className='home__product'>
             <Product
           id="12345"
           title="Lil Tjay type beat "
           price={19.99}
           reating={5}
           status="For sale"
         image={LilTjayPhoto}        
               />
               </div>
               <div className='home__product'>
             <Product
           id="12345"
           title="Lil tjay type beat "
           price={19.99}
           reating={5}
           status="For sale"
            image={LilTjayPhoto}        
               />
        </div>
        </div>
      <div className='home__row'>
            <div className='home__product'>
         <Product
           id="12345"
           title="Jack Harlow type beat "
           price={19.99}
           reating={5}
           status="sold"
           image={JackkHarlowPhoto}
           />
           </div>
               <div className='home__product'>
             <Product
           id="12345"
           title="Da Baby type beat "
           price={19.99}
           reating={5}
           status="sold"
          image={DaBabyPhoto}        
               />
           </div>
      
        </div>
    </div>
 </div>
    </div>
)
}
export default Home;