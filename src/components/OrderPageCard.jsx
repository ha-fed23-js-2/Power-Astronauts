import { useStore } from '../data/menuItems'
import React, { useState } from 'react';

import OrderPageArticle from './OrderPageArticle';


const OrderPageCard = () => {

  // const menuItems = useStore((state) => state.menuItems);
  // const orderedItems = useStore((state) => state.orderedItems);
  // const addOrderedItem = useStore((state) => state.addOrderedItem);
  const { menuItems, orderedItems, addOrderedItem } = useStore((state) => { return { menuItems: state.menuItems, orderedItems: state.orderedItems, addOrderedItem: state.addOrderedItem } })


  function orderItem(item) {
    addOrderedItem(item)
  }


  return (
    <>
      <aside className="order-aside">
        <div className="product-container">
          <div className="order-product-card">
            {menuItems.map((item) => (
              <div className="product-container" key={item.id}>
                <img className="order-image" src={item.image} alt={item.name} />
                <div>
                  <div className="product-wrapper">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="item-wrapper">
                    <p className="price">{item.price} kr</p>
                    <button className="add-to-cart" onClick={() => orderItem(item)}>+</button>
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
