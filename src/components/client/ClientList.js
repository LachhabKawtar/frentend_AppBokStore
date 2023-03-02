import { useState, useEffect } from "react"
import { Table ,Button} from 'reactstrap'
import clientServices from "../../services/ClientService"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove,faEdit,faAdd,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
//key pour que react puisse l'identifier 
function ClientList (){
    const [clients, setClients] = useState([])
    async function getClients(){
       const result = await clientServices.getAllClient();
       setClients(result.data)
    }
    useEffect (()=>{getClients();},[])//executer un traitement apès avoir télécharger le composante
    async function deleteclient(id){ await  clientServices.deleteClient(id)
                               getClients()}
   return ( 
    <div className="col">
       <h1 className="title">Liste des clients</h1>
        <Table bordered>
        <thead>
            <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>CIN</th>
                <th>Adress</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {clients.map((elem,i)=>{
                return   <tr key={i}> 
                            <td>{i+1}</td>
                            <td>{elem.last_name}</td>
                            <td>{elem.first_name}</td>
                            <td>{elem.cin}</td>
                            <td>{elem.adress}</td>
                            <td>
                                 <Button  onClick={()=>deleteclient(elem._id)}  color="danger">
                                      <FontAwesomeIcon icon={faRemove}/> Delete
                                 </Button>{' '}
                                 <Link className="edit" to={`/Clients/edit/${elem._id}`}>
                                    <Button color="success">
                                          <FontAwesomeIcon icon={faEdit}/>Edit
                                    </Button>{' '}
                                 </Link>

                                 <Link >
                                    <Button color="warning">
                                          <FontAwesomeIcon icon={faShoppingCart}/> Commandes
                                    </Button>{' '}
                                 </Link>
                            </td>
                          </tr>
          })}
        </tbody>
        <tfoot>
            <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>CIN</th>
                <th>Adress</th>
                <th>Action</th>
             </tr>
        </tfoot>
    </Table>
    <Link className="edit" to={`/Clients/Add`}>
    <Button  color="primary">
                  <div className="BtnHome">
                       <FontAwesomeIcon  icon={faAdd}/> <span>Nouveau Client</span>
                  </div>
      </Button>
      </Link>
    </div>
   
)}

export default ClientList;
//abdelmajid.bousselham@hotmal.com 