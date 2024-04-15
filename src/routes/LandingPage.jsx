import LandingPageCard from "../components/LandingPageCard";
import "./LandingPage.css";
import LandingImg from "../assets/LandingImg.jpg"
import Logga from "../assets/Logga.svg"



const LandingPage = () => {


    return (
        <>
            <div className="frontPic-container">
                <img className="frontPic" src={LandingImg} alt="Bild på en tallrik köttbullar och potatismos" />

            </div>
            <div className="outer-container">
                <div className="menu-frame-container">
                    <div className="menu-frame">
                        <LandingPageCard />
                    </div>

                </div>


                <img className="loggaHeaderLower" src={Logga} alt="Karlssons husmanskost logga" />
            </div>

        </>
    );
}


export default LandingPage;