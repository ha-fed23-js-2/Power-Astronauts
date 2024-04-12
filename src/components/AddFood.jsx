import { useState, useEffect } from 'react'
import { useStore, handleSave, handleLoad } from '../data/menuItems'

function AddFood() {
    const menuItems = useStore((state) => state.menuItems);
    const { addFood } = useStore((state) => { return { addFood: state.addFood } })

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [nameError, setNameError] = useState(' ')
    const [imageError, setImageError] = useState(' ')
    const [priceError, setPriceError] = useState(' ')
    const [descriptionError, setDescriptionError] = useState(' ')

    // function handleAdd() {
    //     checkError()
    //     if (nameError != '' || imageError != '' || priceError != '' || descriptionError != '') {

    //     }
    //     else {
    //         const newFood = {
    //             name: name,
    //             image: image,
    //             price: price,
    //             description: description
    //         }

    //         addFood(newFood)
    //         handleSave()
    //         setName('')
    //         setImage('')
    //         setPrice('')
    //         setDescription('')
    //     }
    // }

    useEffect(() => {
        if (nameError === '' && imageError === '' && priceError === '' && descriptionError === ''){
            handleAdd();
        }
    }, [nameError, imageError, priceError, descriptionError]);

    function handleAdd() {
        const newFood = {
            name: name,
            image: image,
            price: price,
            description: description
        }

        addFood(newFood)
        handleSave()
        setName('')
        setImage('')
        setPrice('')
        setDescription('')
        console.log(menuItems)
    }

    function checkName() {
        if (name.length === 0) {
            setNameError('Vänligen fyll i ett namn.')
        }
        else if (menuItems.some(item => item.name === name)) {
            setNameError('Rättens namn måste vara unikt.')
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
        // if (nameError === '' && imageError === '' && priceError === '' && descriptionError === ''){
        //     handleAdd()
        //     console.log(nameError)
        //     console.log(imageError)
        //     console.log(priceError)
        //     console.log(descriptionError)
        // }
    }

    return (
        <>
            <section className="add-food-input">
                <h2>Lägg till ny rätt</h2>
                <label>Namn:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <p>{nameError}</p>
                <label>Bild:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <p>{imageError}</p>
                <label>Pris:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <p>{priceError}</p>
                <label>Beskrivning:</label>
                <input className="add-description" value={description} type="text" onChange={(e) => setDescription(e.target.value)} />
                <p>{descriptionError}</p>
                <button onClick={checkError}>Lägg till</button>
            </section>





        </>


    )
}

export default AddFood
