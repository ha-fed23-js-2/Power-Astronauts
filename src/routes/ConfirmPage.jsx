import LoginCard from "../components/LoginCard";
import "./ConfirmPage.css";
import { Link } from "react-router-dom";
import { useStore } from '../data/menuItems'
import { useState } from "react";

const ConfirmPage = () => {
    const { orderedItems } = useStore((state) => { return { orderedItems: state.orderedItems } })

    //Validate values
    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);

    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);

    const [telefon, setTelefon] = useState('');
    const [telefonTouched, setTelefonlTouched] = useState(false);

    const nameIsValid = name.length > 0;
    const nameErrorMessage = nameIsValid ? '' : 'Vänligen, fyll i ditt namn';

    const emailIsValid = email.length > 0 && email.includes('@');
    const emailErrorMessage = emailIsValid ? '' : 'Vänligen, fyll i din e-postadress';

    const telefonIsValid = telefon.length > 0 && /^\d+$/.test(telefon);
    const telefonErrorMessage = telefonIsValid ? '' : 'Vänligen, fyll i din telefonnummer';

    //CSS variables
    let nameErrorClass = 'error ', nameClass = '';
    if (!nameTouched) {
        nameErrorClass += 'hidden';
    } else {
        nameErrorClass += nameIsValid ? 'hidden' : 'invalid';
        nameClass += nameIsValid ? 'valid' : 'invalid';
    }

    // Email CSS variables
    let emailErrorClass = 'error-mail ', emailClass = '';
    if (!emailTouched) {
        emailErrorClass += 'hidden';
    } else {
        emailErrorClass += emailIsValid ? 'hidden' : 'invalid';
        emailClass += emailIsValid ? 'valid' : 'invalid';
    }

    //Telefon CSS variables
    let telefonErrorClass = 'error-telefon ', telefonClass = '';
    if (!telefonTouched) {
        telefonErrorClass += 'hidden';
    } else {
        telefonErrorClass += telefonIsValid ? 'hidden' : 'invalid';
        telefonClass += telefonIsValid ? 'valid' : 'invalid';
    }

     
        const [showPopup, setShowPopup] = useState(false);
    
        const handleClick = () => {
            setShowPopup(true);
            console.log('Tack för din beställning');
        };
    
    

    


    return (
        <div className="confirm-page-body">
            <div className="confirm-page-container">
                <aside className="confirm-aside">
                   
                    <div className="confirm-info-frame">
                        <div className="confirm-info">
                            <input type="text" placeholder="Namn" required
                                className={nameClass}
                                value={name}
                                onChange={event => setName(event.target.value)}
                                onBlur={() => setNameTouched(true)}
                            />
                            <p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>

                        </div>
                        <div className="confirm-info">
                            <input type="email" placeholder="E-post"
                                className={emailClass}
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                onBlur={() => setEmailTouched(true)}
                            />
                            <p className={emailErrorClass}> {emailErrorMessage} &nbsp; </p>
                        </div>
                        <div className="confirm-info">
                            <input type="telefon" placeholder="Telefonnummer" required
                                className={telefonClass}
                                value={telefon}
                                onChange={event => setTelefon(event.target.value)}
                                onBlur={() => setTelefonlTouched(true)}
                            />
                            <p className={telefonErrorClass}> {telefonErrorMessage} &nbsp; </p>
                        </div>
                        <div className="confirm-textarea">
                            <textarea placeholder="Ev; meddelande" rows="4"></textarea>
                        </div>

                        <div>
                       
                        <button className="beställ-container" onClick={handleClick}>Beställ</button>
                         {showPopup && 

                            <div className="popup-overlay">
                                <div className="popup-content">
                                    <p className="order-message">Tack för din beställning</p> 
                                    <Link to='/'>
                                    <span className="close" onClick={handleClick}>&times;</span>
                                    </Link>
                                </div>
                            </div>}

                           
           
                            
                            </div>
                       
                    </div>
                </aside>
                <article className="confirm-article">
                    <div className="confirm-shopping-cart">
                        {orderedItems.map((item, index) => (
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
                        <div className='total-amount'>
                            <div className='total-amount-wraper'>

                                <p className="total-amount">Totalt: {orderedItems.reduce((total, item) => total + item.price, 0)} kr</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default ConfirmPage;