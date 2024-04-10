import {useState} from 'react'
import { useStore } from '../data/menuItems'

function AddFood() {
    const {addFood } = useStore((state) => { return { addFood: state.addFood} })

    const [name, setName] = useState('')
    const [image, setImage] = useState ('')
    const [price, setPrice] = useState ('')
    const [description, setDescription] = useState('')

    function handleAdd() {
        const newFood = {
            name: name,
            image: image,
            price: price,
            description: description
        }
        addFood(newFood)
    }

    return (
        <section className="add-food-input">
            <h2>Lägg till ny rätt</h2>
            <label>Namn:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}></input>
            <label>Bild:</label>
            <input type="text" onChange={(e)=> setImage(e.target.value)}></input>
            <label>Pris:</label>
            <input type="text" onChange={(e)=> setPrice(e.target.value)} />
            <label>Beskrivning:</label>
            <input type="text" onChange={(e)=> setDescription(e.target.value)} />
            <button onClick={handleAdd}>Lägg till</button>
        </section>
    )
}

export default AddFood
