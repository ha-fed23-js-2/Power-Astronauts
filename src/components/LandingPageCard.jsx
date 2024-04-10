import { useStore } from '../data/menuItems';
import React from 'react';
import '../routes/LandingPage.css';

const LandingPageCard = () => {
  const menuItems = useStore((state) => state.menuItems);

  return (
    <>
      {menuItems.map((item) => (
        <div className="landing-card" key={item.id}>
          <h2 className="landing-card-namn">{item.name}</h2>
          <p className="beskrivning">{item.description}</p>
          <p className="pris">{item.price} kr</p>
        </div>
      ))}
    </>
  );
};

export default LandingPageCard;
