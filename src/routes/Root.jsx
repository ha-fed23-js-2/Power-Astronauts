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
                <NavLink to="/EditPage"> EditPage </NavLink></a>
			</nav>
			<img className="loggaHeader" src={Logga} alt="Karlssons husmanskost logga" />
		</header>

		<main>
			<Outlet />
		</main>

		<footer>
			<div>
			<h2>Adress</h2>
			<p>Gustaf Adolfs Torg 3,
				411 10 Göteborg
				Sverige</p>
			</div>
			
			<div>
			<h2>Öppentider</h2>
			<p>Måndag - Fredag: 17:00 - 21:00
				Lördag - Söndag: 12:00 - 21:00 </p>
				</div>

				<div>
			<h2>Kontakta oss</h2>
			<p>Telefon: 031-13 83 83
				Email:info@kalssons.se </p>
				</div>

				<NavLink to="/LoginPage"> Log in </NavLink>
		</footer>
	</div>
)

export default Root