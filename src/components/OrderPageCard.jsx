import { useStore } from '../data/menuItems'
import React, { useState } from 'react';

import OrderPageArticle from './OrderPageArticle';


const OrderPageCard = () => {
  
  const menuItems = useStore((state) => state.menuItems);

    const [count, setCount] = useState(1);
      return (
          <>
          <aside className="order-aside">
          <div className="product-conatiner">
          <div className="order-product-card">
            {menuItems.map((item, index) => (
              <div className="product-container" key={index}>
                <img className="order-image" src={item.image} alt={item.name} />
                <div>
                  <div className="product-wrapper">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="item-wrapper">
                <p className="price">{item.price} kr</p>
                <button className="add-to-cart">+</button>
                </div>
                  </div>
              </div>
            ))}
          </div>
          </div>

        </aside>
        <article className="order-article">
        <OrderPageArticle />
        </article>
          
          
          </>
          
      )
  }
  
  export default OrderPageCard;
