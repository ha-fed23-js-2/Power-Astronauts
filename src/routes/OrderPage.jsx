import menuItems from "../data/menuItems";
import "./OrderPage.css";
import React, { useState } from 'react';
import OrderPageCard from "../components/OrderPageCard";

const OrderPage = () => {
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