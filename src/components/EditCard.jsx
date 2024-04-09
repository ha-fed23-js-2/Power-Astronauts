import { useContext, useState } from 'react'
import Pen from '../assets/edit.png'
import Delete from '../assets/delete.png'
import InputCard from './InputCard'

const EditCard = (props) => {
	const [editItem, setEditItem] = useState(false)
	const [editedItem, setEditedItem] = useState(props.item)

	const handleEdit = () => {
		setEditItem(!editItem)
	}

	const handleInputChange = (event) =>{
		const {name, value} = event.target
		setEditItem({
			...editItem,
			[name]:value
		})
	}

	const handleDelete = () => {
		props.onDelete(props.item)
	}

	return <div> {editItem ?
		<InputCard item={props.item} key={props.item.name}/>
		:
        <div className="order-card">
            <img className="food-image" src={props.item.image} alt={props.item.name} />
            <div className="text-column">	
            <h2 className="namn" contentEditable={editItem} onBlur={handleInputChange}>
                    {editedItem.name}
            </h2>
            <p className="pris">Pris: {props.item.price} kr</p>
                <p className="beskrivning">{props.item.description}
				</p>
            </div>
			<div className='action-btns'>
			<button className='edit-btn' onClick={handleEdit}>
			<img src={Pen} alt ='edit icon'/>
			</button>
			<button className='delete-btn' onClick={handleDelete}>
			<img src={Delete} alt ='delete icon'/>
			</button>
			</div>
        </div>
}
	 </div>
	}
export default EditCard