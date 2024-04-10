import { useStore } from '../data/menuItems'
import "./OrderPage.css";
import React, { useState } from 'react';
import OrderPageCard from "../components/OrderPageCard";

const OrderPage = () => {
  const { menuItems } = useStore((state) => { return { menuItems: state.menuItems } })

  const [count, setCount] = useState(1);
    return (
        <>
        {/* Huvudkomponent för order-sidan */}
        <div className="order-page-body">
          <div className="order-page-container">
        <OrderPageCard />
          </div>
      </div>

        
        </>
        
    )
}

export default OrderPage;