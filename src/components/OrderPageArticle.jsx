import { useStore } from '../data/menuItems'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Delete from '../assets/delete.png';


const OrderPageArticle = () => {

  const { menuItems, orderedItems, deleteOrderedItem } = useStore((state) => { return { menuItems: state.menuItems, orderedItems: state.orderedItems, deleteOrderedItem: state.deleteOrderedItem } })



  return (
    <>
      <div className='sticky'>
        <h3 className="order-title">Din beställning</h3>
        <div className="shopping-cart">

          <div className='scroll-container'>
            {orderedItems.map((item, index) => (
              <div className="selected-product-container" key={index}>
                <div className='selected'>
                  <div className='name-price'>
                    <h3>{item.name}</h3>
                    <p className="price">{item.price} kr</p>
                  </div>
                  <div className='delete-conatiner'>
                  <button className='cart-delete-btn' onClick={() => deleteOrderedItem(item.id)}>
                    <img src={Delete} alt='delete icon' />
                  </button>

                  </div>
                  


                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='total-amount'>
          <div className='total-amount-wraper'>

            <p className="total-amount">Totalt: {orderedItems.reduce((total, item) => total + item.price, 0)} kr</p>
            <Link to="/ConfirmPage"> {/*Link för att navigera till ConfirmPage*/}
              <button className="complete">Slutför</button>
            </Link>

          </div>

        </div>

      </div>





    </>

  )
}

export default OrderPageArticle;