import EditCard from "./EditCard"

const InputCard = (props, handleInputChange, handleEdit, handleDelete) =>{
    return (
        <div className="order-card">
            <input className="food-input"></input>
            <div className="text-column">	
            <input className="name-input" onBlur={handleInputChange} defaultValue={item.name}></input>
            <input className="description-input"></input>
            </div>
			<div className='action-btns'>
            <input className="price-input"></input>
			<button className='edit-btn' onClick={handleEdit}>
			<img src={Pen} alt ='edit icon'/>
			</button>
			<button className='delete-btn' onClick={handleDelete}>
			<img src={Delete} alt ='delete icon'/>
			</button>
			</div>
        </div>
    )
}

export default InputCard