import { useState, useEffect } from "react"
import { Table ,Button} from 'reactstrap'
import BookServices from "../../services/BookServices"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove,faEdit,faAdd } from '@fortawesome/free-solid-svg-icons'
//key pour que react puisse l'identifier 
function BookList (){
    const [Book, setBook] = useState([])
    async function getBook(){
       const result = await BookServices.getAllBook();
       setBook(result.data)
    }
    useEffect (()=>{getBook();},[])//executer un traitement apès avoir télécharger le composante
    async function deleteBook(id){ await  BookServices.deleteBook(id)
                               getBook()}
   return ( 
    <div className="col">
       <h3 className="title">Liste of Book</h3>
        <Table bordered>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>ISBN</th>
                <th>Author</th>
                <th>Editor</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {Book.map((elem,i)=>{
                return <tr key={i}> 
                            <td>{i+1}</td>
                            <td>{elem.name} </td>
                            <td><img style={{
                    width: '5rem',
                    height:'5rem',
                    margin:'21px'
              }}
              const a = {elem.image}
                alt="Sample"
                src={(`/assets/images/${elem.image}`)}
              /> </td>
                            <td>{elem.isbn}</td>
                            <td>{elem.author}</td>
                            <td>{elem.editor}</td>
                            <td>{elem.price}</td>
                            <td>{elem.category.nom}</td>
                            <td>
                                 <Button  onClick={()=>deleteBook(elem._id)}  color="danger">
                                      <FontAwesomeIcon icon={faRemove}/> Delete
                                 </Button>{' '}
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
                <th>Name</th>
                <th>Image</th>
                <th>ISBN</th>
                <th>Author</th>
                <th>Editor</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
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

export default BookList;
//abdelmajid.bousselham@hotmal.com 