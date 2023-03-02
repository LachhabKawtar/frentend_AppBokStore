import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import clientServices from "../../services/ClientService";
//import { useNavigate } from "react-router-dom";
function EditClient (){
        const [last_name, setLastName] = useState("")   
        const [first_name, setFirstName] = useState("")
        const [cin, setCin] = useState("")
        const [adress, setAdress] = useState("")
        const {idc} = useParams();
        const naviger=useNavigate()
    async function getClient(){
            const res = await clientServices.getClientBayId(idc)
            setFirstName(res.data.first_name)
            setLastName(res.data.last_name)
            setAdress(res.data.adress)
            setCin(res.data.cin)
    }
   async function updateClient(e)
   {
      e.preventDefault()
     const client = {"_id":idc,"last_name":last_name,"first_name":first_name,"cin":cin,"adress":adress}
     await clientServices.updateClient(client);
      naviger("/Clients")
   }
useEffect (()=>{getClient()   },[])
return (
    <div className="container">
       <h1 className="title" >Editer client</h1>
        <Form onSubmit={(e)=>updateClient(e)}> 
                <FormGroup className="col-sm">
                <Label>Prénom</Label>
                <Input    id="firstName" type="text" 
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)} placeholder="Entrer Nom..." />
                </FormGroup>
                <FormGroup className="col-sm">
                        <Label>Nom</Label>
                        <Input  id="lastName"  type="text" 
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)} placeholder="Entrer CIN..." />
                </FormGroup>
                <FormGroup className="col-sm">
                        <Label>CIN</Label>
                        <Input  id="cin"  type="text" 
                                value={cin}
                                onChange={(e) => setCin(e.target.value)} placeholder="Entrer CIN..." />
                </FormGroup>
                <FormGroup className="col-sm">
                        <Label>Adress</Label>
                        <Input   id="adress" type="text" 
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)} placeholder="Entrer Adress..." />
                </FormGroup>
                <Button type="submit" color="primary">Enregistrer</Button>{' '}
        </Form>
    </div>
  )
}
export default EditClient;