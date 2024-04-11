import {useState} from 'react'
import { useStore, handleSave, handleLoad } from '../data/menuItems'

function AddFood() {
    const menuItems = useStore((state) => state.menuItems);
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
    <>
     <section className="add-food-input">
            <h2>Lägg till ny rätt</h2>
            <label>Namn:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}></input>
            <label>Bild:</label>
            <input type="text" onChange={(e)=> setImage(e.target.value)}></input>
            <label>Pris:</label>
            <input type="text" onChange={(e)=> setPrice(e.target.value)} />
            <label>Beskrivning:</label>
            <input className="add-description" type="text" onChange={(e)=> setDescription(e.target.value)} />
            <button onClick={handleAdd}>Lägg till</button>
        </section>
        <div>
            <button type="button" onClick={handleSave}>Spara Meny</button>
            <button type="button" onClick={handleLoad}>Hämta Meny</button>     
        </div>
    

   
                    
    </>
       
        
    )
}

export default AddFood
