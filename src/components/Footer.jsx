import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../routes/root.css'

function Footer() {
   

    return (
        <>
        <div className="footer-container">
                <div className="info">
                    <h3>Adress</h3>
                    <address>
                        Gustaf Adolfs Torg 3,<br />
                        411 10 Göteborg<br />
                        Sverige
                    </address>
                </div>

                <div className="info">
                    <h3>Öppentider</h3>
                    <p>Måndag - Fredag: 17:00 - 21:00</p>
                    <p>Lördag - Söndag: 12:00 - 21:00</p>
                </div>

                <div className="info">
                    <h3>Kontakta oss</h3>
                    <p>Telefon: 031-13 83 83</p>
                    <p>Email: <a href="mailto:info@kalssons.se">info@kalssons.se</a></p>
                </div>

                <div className="login-btn">
                    <NavLink to="/Logga-in">Log in</NavLink>
                </div>

            </div>
        </>
        
            
        
    );
}

export default Footer;
