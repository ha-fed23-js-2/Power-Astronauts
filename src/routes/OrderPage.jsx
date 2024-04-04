import menuItems from "../data/menuItems";
import "./LandingPage.css";
const OrderPage = () => {
    return (
        <>
        <div>
            <h1>Order Page</h1>
        </div>
        <div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Pris: {item.price} kr</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
        </>
        
    )
}

export default OrderPage;