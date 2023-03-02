import { useState } from "react"
import { Button, Form, FormGroup, Input, Label,Col,Row} from 'reactstrap';
import CategorieServices from "../../services/CategorieServices";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from "@fortawesome/free-solid-svg-icons";
function NewCategory()
{
    
    const [nom, setCategorieName] = useState("")
    const naviger = useNavigate()
    async function newCategorie(e)
    {
       e.preventDefault()
       const c = {"nom":nom}
       await CategorieServices.addCategorie(c)
       naviger("/admin/Category")
    }
    return (
      <div className="container">
         <h4 className="title">
           <FontAwesomeIcon icon={faAdd} className="mr-2"/>New Category</h4>
          <Form onSubmit={(e)=>newCategorie(e)}>
            <Row>
            <Col md={5}> 
            <FormGroup >
                <Label for='name'>Name</Label>
                <Input     id="nom" type="text" 
                           onChange={(e) => setCategorieName(e.target.value)} placeholder="Entrer categorie..." />
            </FormGroup>
            </Col>
            </Row>
            <Button type="submit" color="primary"><FontAwesomeIcon icon={faAdd} className="mr-2"/>Add</Button>{' '}
          </Form>
      </div>
    )
}
export default NewCategory;