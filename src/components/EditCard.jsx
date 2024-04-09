import React from 'react';
import Pen from '../assets/edit.png';
import Delete from '../assets/delete.png';

const EditCard = (props) => {
    return (
        <>
            <div>
                <div className="order-card">
                    <img className="food-image" src={props.item.image} alt={props.item.name} />
                    <div className="text-column">
                        <h2 className="namn">
                            {/* Content for name */}
                        </h2>
                        <p className="pris">Pris: {props.item.price} kr</p>
                        <p className="beskrivning">{props.item.description}</p>
                    </div>
                    <div className='action-btns'>
                        <button className='edit-btn'>
                            <img src={Pen} alt='edit icon' />
                        </button>
                        <button className='delete-btn'>
                            <img src={Delete} alt='delete icon' />
                        </button>
                    </div>
                </div>
            </div>
		
        </>
    );
}

export default EditCard;
