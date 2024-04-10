import { useStore } from '../data/menuItems'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const OrderPageArticle = () => {
  
  const menuItems = useStore((state) => state.menuItems);

   
      return (
          <>
          
       
          <div className="shopping-cart">
           <div>
            {menuItems.map((item, index) => (
              <div className="selected-product-container" key={index}>
                <div className='selected'>
                  <h2>{item.name}</h2>
                  <p className="price">{item.price} kr</p>
               
                
                  </div>
              </div>
            ))}
            <Link to="/ConfirmPage"> {/*Link för att navigera till ConfirmPage*/}
              <button className="complete">Slutför</button>
            </Link>
                    
                
                    
          </div>
          

          </div>
        
          
          
          </>
          
      )
  }
  
  export default OrderPageArticle;