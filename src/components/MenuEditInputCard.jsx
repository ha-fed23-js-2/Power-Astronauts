import React from "react"
import { useState } from React
import { useStore } from '../data/menuItems'

export default function MenuEditInputCard({ item }) {
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

    return <div> {editMode ?
        <div>
            <input onChange={(e) => setImage(e.target.value)}></input>
            <input onChange={(e) => setName(e.target.value)}></input>
            <input onChange={(e) => setDescription(e.target.value)}></input>
            <input onChange={(e) => setPrice(e.target.value)}></input>
            <button onClick={() => deleteItem(item.id)}></button>
            <button onClick={handleEditItem}></button>
        </div> :
        <div className="order-card">
            <img src={props.item.image} alt={props.item.name} />
            <h2 classname="namn">{props.item.name}</h2>
            <p classname="beskrivning">{props.item.description}</p>
            <p classname="pris">Pris: {props.item.price} kr</p>
            <button onClick={setEditMode(true)}></button>
        </div>
    }
    </div>
}