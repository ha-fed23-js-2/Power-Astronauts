import LoginCard from "../components/LoginCard";
import "./ConfirmPage.css";
import { useStore } from '../data/menuItems'

const ConfirmPage = () => {
    const { menuItems } = useStore((state) => { return { menuItems: state.menuItems } })

    return (
        <>
         <div className="confirm-page-body">
    <div className="order-page-container">
        <aside className="order-aside">
          
            <div className="header">
               
                <div className="underline"></div>
            </div>
            <div className="input-frame">
                <div className="input">
                    <input type="text" placeholder="Name" required />
                </div>
                <div className="input">
                    <input type="Number" placeholder="Number"/>
                </div>
                <div className="input">
                    <input type="Adress" placeholder="Adress" required />
                </div>
                <div className="input">
                    <input type="Beskriving" placeholder="Beskrivning" required />
                </div>
                
            </div>
            <div className="submit-container">
                <button className="submit">Slutför</button>
            </div>
       
   

            
          

        </aside>
              <article className="order-article">
                  <div className="confirm-shopping-cart">
                
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
            </article>
    </div>
</div>


            
        </>
        
    );
}

export default ConfirmPage;