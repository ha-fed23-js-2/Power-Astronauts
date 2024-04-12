import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const popUpConfirm = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div>
            <Link to='/'><button className="beställ" onClick={handleClick}>Beställ</button>
            {showPopup && <div className="popup">Tack för din beställning</div>}
            </Link>
        </div>
    );
};


export default popUpConfirm;