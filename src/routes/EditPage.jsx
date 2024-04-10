import { useStore } from '../data/menuItems'
import "./LandingPage.css";
import "./EditCard.css";
import EditCard from "../components/EditCard";


const EditPage = (props) => {

  const { menuItems } = useStore((state) => { return { menuItems: state.menuItems } })


      return (
          <>
          <div>
              <h1>Edit Page</h1>
        {menuItems.map((item, index) => (
          <EditCard item={item} key={item.name} />
        ))}
        </div>
        </>
        )}
  

export default EditPage;