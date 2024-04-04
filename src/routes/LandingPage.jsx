import menuItems from "../data/menuItems";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <>
        <div>
        <h1>Landing Page</h1>
                <menuItems />
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
    );
}

export default LandingPage;