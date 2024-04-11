import { Link, NavLink, Outlet } from "react-router-dom"
import './root.css'
import Logga from "../assets/Logga.svg"
import { loadFromApi, saveToApi } from '../data/api';
import { useStore } from '../data/menuItems'
import Footer from '../components/Footer'



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
		<NavLink to="/OrderPage" className="header-options">BESTÄLL</NavLink>
			<img className="loggaHeader" src={Logga} alt="Karlssons husmanskost logga" />
			
                
				<NavLink to="/" className="header-options">MENY</NavLink>
		
            </div>
		</header>

		<main>
			<Outlet />
		</main>
				<div>
                    <button type="button" onClick={handleSave}>Spara Meny</button>
                    <button type="button" onClick={handleLoad}>Hämta Meny</button>
                </div>

		<footer>
			<Footer />
    
		</footer>

	</div>
	);
}




export default Root
