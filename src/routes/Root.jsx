import { Link, NavLink, Outlet } from "react-router-dom"
import React, { useEffect } from 'react';
import './root.css'
import { handleLoad } from '../data/menuItems'
import Logga from "../assets/Logga.svg"
import Footer from '../components/Footer'



const Root = () => {
    useEffect(() => {
        handleLoad(); // Ladda menyobjekt från API
      }, []); // körs när komponenten skapas


	return (
	<div className="app">
		<header>

		<div className="header-row">
		    <NavLink to="/Beställ" className="header-options">BESTÄLL</NavLink>
			<img className="loggaHeader" src={Logga} alt="Karlssons husmanskost logga" />
			<NavLink to="/" className="header-options">MENY</NavLink>
            </div>
		</header>

		<main>
			<Outlet />
		</main>
				

		<footer>
			<Footer />
		</footer>

	</div>
	);
}




export default Root
