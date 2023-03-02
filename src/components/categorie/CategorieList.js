import { useState, useEffect } from "react"
import { Table ,Button} from 'reactstrap'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove,faEdit,faAdd} from '@fortawesome/free-solid-svg-icons'
import CategorieServices from "../../services/CategorieServices"
//key pour que react puisse l'identifier 
function CategoryList (){
    const [categories, setCategories] = useState([])
    async function getCategories(){
       const result = await CategorieServices.getAllCategories();
       setCategories(result.data)
    }
    useEffect (()=>{getCategories();},[])//executer un traitement apès avoir télécharger le composante
    async function deleteCategorie(id){ 
                              await  CategorieServices.deleteCategorie(id)
                               getCategories()}
   return ( 
    <div className="col">
       <h3 className="title">Liste of Category</h3>
       <h3></h3>
        <Table bordered>
        <thead>
             <tr>
                <th>#</th>
                <th>Category</th>
                <th >Edit</th>
                <th>Delete</th>
             </tr>
        </thead>
        <tbody>
          {categories.map((elem,i)=>{
                return   <tr key={i}> 
                            <td>{i+1}</td>
                            <td>{elem.nom}</td>
                            <td>
                                 <Button  onClick={()=>deleteCategorie(elem._id)}  color="danger">
                                      <FontAwesomeIcon icon={faRemove}/> Delete
                                 </Button>{' '}
                            </td>
                            <td>
                                 <Link className="edit" to={`Edit/${elem._id}`}>
                                    <Button color="success">
                                          <FontAwesomeIcon icon={faEdit}/>Edit
                                    </Button>{' '}
                                 </Link>
                            </td>
                          </tr>
          })}
        </tbody>
        <tfoot>
             <tr>
                <th>#</th>
                <th>Category</th>
                <th >Edit</th>
                <th>Delete</th>
             </tr>
        </tfoot>
    </Table>
    <Link className="edit" to={`new`}>
    <Button  color="primary">
                  <div className="BtnHome">
                       <FontAwesomeIcon  icon={faAdd}/> <span>New</span>
                  </div>
      </Button>
      </Link>
    </div>
)}
export default CategoryList;
