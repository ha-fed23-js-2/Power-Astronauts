import { Link, NavLink, Outlet } from "react-router-dom"
import './root.css'
import Logga from "../assets/Logga.svg"

const Root = () => (
    <div className="app">
        <header>
            <nav className="buttons">
                <a>
                    <NavLink to= "/" > LandingPage </NavLink>
                    <NavLink to="/OrderPage"> Orderpage </NavLink>
                    <NavLink to="/ConfirmPage"> ConfirmPage </NavLink>
                    <NavLink to="/EditPage"> EditPage </NavLink>
                </a>
            </nav>
            <img className="loggaHeader" src={Logga} alt="Karlssons husmanskost logga" />
            <div className="header-row">
                <NavLink to="/OrderPage" className="header-options">Beställ</NavLink>
				<NavLink to="/" className="header-options">Meny</NavLink>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <div className="info">
                <h3>Adress</h3>
                <p>Gustaf Adolfs Torg 3,
                    411 10 Göteborg
                    Sverige</p>
            </div>
            <div className="info">
                <h3>Öppentider</h3>
                <p>Måndag - Fredag: 17:00 - 21:00</p>
                <p>Lördag - Söndag: 12:00 - 21:00</p>
            </div>
            <div className="info">
                <h3>Kontakta oss</h3>
                <p>Telefon: 031-13 83 83
                    Email:info@kalssons.se </p>
            </div>
            <div className="login-btn">
                <a><NavLink to="/LoginPage"> Log in </NavLink></a>
            </div>
        </footer>
    </div>
)

export default Root
