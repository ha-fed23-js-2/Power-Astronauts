import React from "react"
import { useState, useEffect } from "react"
import Pen from '../assets/edit.png';
import Delete from '../assets/delete.png';
import { useStore, handleSave, handleLoad } from '../data/menuItems'

export default function EditCard({ item }) {
    const { deleteItem, updateItem } = useStore((state) => { return { deleteItem: state.deleteItem, updateItem: state.updateItem } })
    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(item.name)
    const [image, setImage] = useState(item.image)
    const [price, setPrice] = useState(item.price)
    const [description, setDescription] = useState(item.description)
    const [nameError, setNameError] = useState(' ')
    const [imageError, setImageError] = useState(' ')
    const [priceError, setPriceError] = useState(' ')
    const [descriptionError, setDescriptionError] = useState(' ')

    useEffect(() => {
        if (nameError === '' && imageError === '' && priceError === '' && descriptionError === '') {
            handleEditItem(item);
        }
    }, [nameError, imageError, priceError, descriptionError]);

    function handleEditItem(item) {
        let updatedItem = {
            id: item.id,
            name: name,
            image: image,
            price: parseInt(price),
            description: description
        }
        updateItem(updatedItem)
        setEditMode(false)
        handleSave()
        setNameError(' ')
        setImageError(' ')
        setPriceError(' ')
        setDescriptionError(' ')
    }

    function toggleEdit() {
        setEditMode(!editMode)
    }

    function handleDeleteItem(item) {
        deleteItem(item.id)
        handleSave()
    }

    function checkName() {
        if (name.length === 0) {
            setNameError('Vänligen fyll i ett namn.')
        }
        else {
            setNameError('')
        }
    }

    function checkImage() {
        if (image.length === 0) {
            setImageError('Vänligen fyll i en bildlänk.')
        }
        else if (!image.includes('http')) {
            setImageError('Länken måste ha ett giltigt format.')
        }
        else {
            setImageError('')
        }
    }

    function checkPrice() {
        if (price.length === 0) {
            setPriceError('Vänligen fyll i ett pris.')
        }
        else if (/[A-Öa-ö]+$/.test(price)) {
            setPriceError('Detta fält kan bara ha siffror i sig.')
        }
        else {
            setPriceError('')
        }
    }

    function checkDescription() {
        if (description.length === 0) {
            return setDescriptionError('Vänligen fyll i en beskrivning.')
        }
        else if (description.length < 10) {
            return setDescriptionError('Beskrivningar måste vara längre än 10 bokstäver.')
        }
        else {
            setDescriptionError('')
        }
    }

    function checkError() {
        checkName()
        checkImage()
        checkPrice()
        checkDescription()
    }

    return <div> {editMode === true ?
        <div className="order-card">
            <div className="edit-food-item">
                <input className="edit-name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <p>{nameError}</p>
                <input className="edit-image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <p>{imageError}</p>
                <input className="edit-price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <p>{priceError}</p>
                <input className="edit-description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <p>{descriptionError}</p>
                <div className="button-div"><button className="cancel-btn" onClick={toggleEdit}>Tillbaka</button>
                    <button className="save-button" onClick={checkError}>Spara</button>
                </div>
            </div>
        </div> :
        <div className="order-card">
            <div className="edit-row">
                <img className="food-image" src={item.image} alt={item.name} />
                <div className='action-btns'>
                    <button className='edit-btn'>
                        <img src={Pen} alt='edit icon' onClick={toggleEdit} />
                    </button>
                    <button className='delete-btn'>
                        <img src={Delete} alt='delete icon' onClick={() => handleDeleteItem(item)} />
                    </button>
                </div>

            </div>

            <div className="text-column">
                <h2 className="namn">
                    {item.name}
                </h2>
                <p className="pris">Pris: {item.price} kr</p>
                <p className="beskrivning">{item.description}</p>
            </div>

        </div>
    }
    </div>
}