import React from'react';
import './Home.css';
import JSONDATA from'./MOCK_DATA.json'
import Product from '../../Product/Product';
 import DaBabyPhoto from '../assets/images/Da_Baby.jpeg'
import JackkHarlowPhoto from '../assets/images/Jack_Harlow.jpg'
import LilTjayPhoto from '../assets/images/Lil_tjay.jpg'

const Home = ({state}) => {
  const filteredData = JSONDATA.filter((el)=>{
    if(state ===''){
       return el;
     }
     else{
       return el.title.toLowerCase().includes(state)
     }
   })
return(
    <div>

<div className='home'>
<div className='home__row'>
  <ul>
    {
   filteredData.map((val,key,image)=>{
    switch(val.title){
      case'DaBaby type beat':
       image=DaBabyPhoto
       break;
     case'Lil tjay type beat':
     image=LilTjayPhoto
     break;
     case 'Jack Harlov type beat':
      image=JackkHarlowPhoto
      break;
      default:
        console.log("No Beats for sale")
    }
   return(
    <li>
      <div className='home__product' key={key}>
     <Product
           id={val.id}
           title= {val.title}
           price={val.price}
           reating={val.reating}
           status={val.status}
          image={image}        
               />
      </div> 
      </li>
   )
    } )}
</ul>
</div>


 {/* <div className='home'>
  
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
 </div> */}
</div>
    </div>
)
}
export default Home;

