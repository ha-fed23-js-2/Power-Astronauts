import { Link, NavLink, Outlet } from "react-router-dom"
import './root.css'
import Logga from "../assets/Logga.svg"
import { loadFromApi, saveToApi } from '../data/api';
import { useStore } from '../data/menuItems'


// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => {

	const setMenuItems = useStore((state) => state.setMenuItems);

    const handleSave = async () => {
        const menuItems = useStore.getState().menuItems;
        await saveToApi(menuItems);
        console.log('Meny sparad!');
    };

    const handleLoad = async () => {
        const loadedMenuItems = await loadFromApi();
        if (loadedMenuItems && loadedMenuItems.length > 0) {
            setMenuItems(loadedMenuItems);
           console.log('Meny laddad!');
        } else {
            console.log('Inga menyobjekt hittades.');
        }
    };

	return (
	<div className="app">
		<header>

		<div className="header-row">
		<NavLink to="/OrderPage" className="header-options">Beställ</NavLink>
			<img className="loggaHeader" src={Logga} alt="Karlssons husmanskost logga" />
			
                
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
				<a><NavLink to="/LoginPage"> Log in </NavLink>
					</a>

				</div>
				{/* Nytt: Spara och Hämta knappar */}
                <div>
                    <button onClick={handleSave}>Spara Meny</button>
                    <button onClick={handleLoad}>Hämta Meny</button>
                </div>

				
		</footer>
	</div>
	);
}




export default Root
