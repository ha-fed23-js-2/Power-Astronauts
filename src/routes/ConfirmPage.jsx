import LoginCard from "../components/LoginCard";
import "./ConfirmPage.css";
import menuItems from "../data/menuItems";
// import confirm from "../data/confirm";


import { Link } from "react-router-dom";

const ConfirmPage = () => {
    return (
        <div className="confirm-page-body">
            <div className="order-page-container">
                <aside className="order-aside">
                    <div className="header">
                        <div className="underline"></div>
                    </div>
                    <div class="confirm-info-frame">
                        <div class="confirm-info">
                            <input type="text" placeholder="Namn" required />
                        </div>
                        <div class="confirm-info">
                            <input type="email" placeholder="Email/Numer"/>
                        </div>
                        <div class="confirm-info">
                            <input type="address" placeholder="Adress" required />
                        </div>
                        <div class="confirm-info">
                            <input type="text" placeholder="Beskrivining" required />
                        </div> 
                        <div class="beställ-container"> 
                            <Link to="/">Beställ</Link>
                        </div>
                    </div>
                </aside>
                <article className="confirm-article">
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}

export default ConfirmPage;