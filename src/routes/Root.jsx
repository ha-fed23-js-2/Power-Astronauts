import { Link, NavLink, Outlet } from "react-router-dom"
import './root.css'
import Logga from "../assets/Logga.svg"

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
		
			<nav className="buttons">
				<a><NavLink to= "/" > LandingPage </NavLink>
				<NavLink to="/OrderPage"> Orderpage </NavLink>
				<NavLink to="/ConfirmPage"> ConfirmPage </NavLink>
                <NavLink to="/LoginPage"> Log in </NavLink>
                <NavLink to="/EditPage"> EditPage </NavLink></a>
			</nav>
			<img className="loggaHeader" src={Logga} alt="Karlssons husmanskost logga" />
		</header>

		<main>
			<Outlet />
		</main>

		<footer>
			innehåll
		</footer>
	</div>
)

export default Root