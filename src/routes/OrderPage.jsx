import { useStore } from '../data/menuItems'
import "./OrderPage.css";
import React, { useState } from 'react';

const OrderPage = () => {
  const { menuItems } = useStore((state) => { return { menuItems: state.menuItems } })

  const [count, setCount] = useState(1);
    return (
        <>
        {/* Huvudkomponent för order-sidan */}
        <div className="order-page-body">
    <div className="order-page-container">
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
                <button className="show-more">Läs mer</button>
                <button className="add-to-cart">+</button>
                </div>
                  </div>
              </div>
            ))}
          </div>
          </div>

        </aside>
        <article className="order-article">
          <div className="shopping-cart">
           <div>
            {menuItems.map((item, index) => (
              <div className="selected-product-container" key={index}>
                <div>
                  <h2>{item.name}</h2>
                <p className="price">{item.price} kr</p>
                <div className="counter-wrapper">
                  <div className="counter">
                    <button onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
                    <div className="count-display">{count}</div>
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                </div>
                
                  </div>
              </div>
            ))}
            
          </div>
          

          </div>
        </article>
    </div>
</div>

        
        </>
        
    )
}

export default OrderPage;