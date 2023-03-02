import { useState ,useEffect} from "react"
import { Link } from "react-router-dom";
import { 
    Input,
    DropdownItem,
    DropdownMenu,
    Dropdown,
    DropdownToggle,
} from 'reactstrap';
import CategorieServices from "../../services/CategorieServices";
function SearchCategory()
{
    const [isOpenDropdown, setIsOpenDropDown] = useState(false)
    const [categories, setCategories] = useState([])
    async function getCategories(){
       const result = await CategorieServices.getAllCategories();
       setCategories(result.data)
    }
    useEffect (()=>{getCategories();},[])
    return (
        <Dropdown  toggle={() => setIsOpenDropDown(!isOpenDropdown)} isOpen={isOpenDropdown}>
        <DropdownToggle>
        <Input  placeholder="search Category" />
        </DropdownToggle>
        <DropdownMenu>
        {categories.map((elem,i)=>{
            return (
                      <DropdownItem tag={Link} to={`Category/${elem._id}`}>{elem.nom}</DropdownItem>
         ) })}
        </DropdownMenu>
        </Dropdown>
    )
}
export default SearchCategory;