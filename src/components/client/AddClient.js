import { useState } from "react"
import { Button, Form, FormGroup, Input,Col, Label } from 'reactstrap';
import clientServices from "../../services/ClientService";
import { useNavigate } from "react-router-dom";
function AddClient()
{
    const [last_name, setFirstName] = useState("")    //variable state -> last_name
                                                      //setFirstName -> fct pour changer la variable state
    const [first_name, setLastName] = useState("")
    const [cin, setCin] = useState("")
    const [adress, setAdress] = useState("")
    const naviger = useNavigate()
    async function newClient(e)
    {
       e.preventDefault()
       const client = {"last_name":last_name,"first_name":first_name,"cin":cin,"adress":adress}
       await clientServices.addClient(client);
       naviger("/Clients")
    }
    return (
      <div className="row row-content">
        <div className="col-12">
             <h3 className="title">Nouveau client</h3>   
        </div>
        <div className="col-12 col-md-9">
            <Form onSubmit={(e)=>newClient(e)}> 
              <FormGroup row>
                <Label for="lastName" md={2}>Nom</Label>
                <Col md={{size: 5, offset: 3}}>
                  <Input id="lastName" type="text" 
                            onChange={(e) => setFirstName(e.target.value)} placeholder="Entrer Nom..." />
                </Col>
                  
              </FormGroup>
              <FormGroup row>
                <Label for="firstName" md={2}>Prénom</Label>
                <Col md={{size: 5, offset: 3}}>
                <Input   id="firstName" type="text" 
                            onChange={(e) => setLastName(e.target.value)}placeholder="Entrer Prénom..." />
                </Col>
                  
              </FormGroup>
              <FormGroup row>
                <Label for="cin" md={2}>CIN</Label>
                  <Col md={{size: 5, offset: 3}}>
                      <Input  id="cin"  type="text" 
                              onChange={(e) => setCin(e.target.value)} placeholder="Entrer CIN..." />
                  </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="adress" md={2}>Adress</Label>
                    <Col md={{size: 5, offset: 3}}>
                      <Input   id="adress" type="text" 
                              onChange={(e) => setAdress(e.target.value)} placeholder="Entrer Adress..." />
                    </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size: 5, offset: 3}}>
                    <Button type="submit" color="primary">
                           Ajouter+
                    </Button>{' '}
                </Col>
              </FormGroup>
            </Form>
        </div> 
      </div>
    )
}
export default AddClient;