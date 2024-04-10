import React from "react"
import { useState } from "react"
import { useStore } from '../data/menuItems'
import Pen from '../assets/edit.png';
import Delete from '../assets/delete.png';

export default function EditCard({ item }) {
    const { deleteItem, updateItem } = useStore((state) => { return { deleteItem: state.deleteItem, updateItem: state.updateItem } })
    const [editMode, setEditMode] = useState(false)
    const [image, setImage] = useState(item.image)
    const [name, setName] = useState(item.name)
    const [description, setDescription] = useState(item.description)
    const [price, setPrice] = useState(item.price)

    function handleEditItem() {
        let updatedItem = {
            image: image,
            name: name,
            description: description,
            price: price
        }
        updateItem(updatedItem)
        setEditMode(false)
    }

    return <div> {editMode === true ?
        <div>
            <input onChange={(e) => setImage(e.target.value)}></input>
            <input onChange={(e) => setName(e.target.value)}></input>
            <input onChange={(e) => setDescription(e.target.value)}></input>
            <input onChange={(e) => setPrice(e.target.value)}></input>
            <button onClick={() => deleteItem(item.id)}></button>
            <button onClick={handleEditItem}></button>
        </div> :
        <div className="order-card">
            <img className="food-image" src={item.image} alt={item.name} />
            <div className="text-column">
                        <h2 className="namn">
                            {item.name}
                        </h2>
                        <p className="pris">Pris: {item.price} kr</p>
                        <p className="beskrivning">{item.description}</p>
                    </div>
                    <div className='action-btns'>
                        <button className='edit-btn'>
                            <img src={Pen} alt='edit icon' onClick={handleEditItem}/>
                        </button>
                        <button className='delete-btn'>
                            <img src={Delete} alt='delete icon' onClick={() => deleteItem(item.id)}/>
                        </button>
                    </div>
        </div>
    }
    </div>
}