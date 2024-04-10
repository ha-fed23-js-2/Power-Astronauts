import LandingPageCard from "../components/LandingPageCard";
import "./LandingPage.css";
import LandingImg from "../assets/LandingImg.jpg"
import Logga from "../assets/Logga.svg"
import { useStore } from '../data/menuItems'


const LandingPage = () => {
  const { menuItems } = useStore((state) => { return { menuItems: state.menuItems } })

  // const LandingPageCard = (props) => (
  //   <div>
  //       <h2>{props.item.name}</h2>
  //       <p>{props.item.description}</p>
  //       <p>Pris: {props.item.price} kr</p>
  //   </div>
  //   )
    return (
        <>
         <div className="frontPic-container">
         <img className="frontPic" src={LandingImg} alt="Bild på en tallrik köttbullar och potatismos" />

        </div>

      
  
		
	
        

       <div className="outer-container">
		<div className="menu-frame">
      {menuItems.map((item, i) => (
        <LandingPageCard item={item} key={item.name} />
      ))}
    </div>
   
	<img className="loggaHeaderLower" src={Logga} alt="Karlssons husmanskost logga" />
	  </div>
	  
        </>
    );
}


export default LandingPage;