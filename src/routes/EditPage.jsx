import menuItems from "../data/menuItems";
import "./LandingPage.css";
import "./EditCard.css";
import EditCard from "../components/EditCard";


const EditPage = (props) => {
    const handleDeleteItem = (deletedItem) => {
    
  }

      return (
          <>
          <div>
              <h1>Order Page</h1>
        {menuItems.map((item, index) => (
          <EditCard item={item} key={item.name} onDelete={handleDeleteItem}/>
        ))}
        </div>
        </>
        )}
  

export default EditPage;