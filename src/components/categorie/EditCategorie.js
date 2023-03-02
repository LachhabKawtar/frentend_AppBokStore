import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import CategorieServices from "../../services/CategorieServices";
import { useNavigate } from "react-router-dom";
function EditCategory (){
        const [nom, setCategorieName] = useState("")   
        const {idCateg} = useParams();
       const naviger=useNavigate()
    async function getCategorie(){
        const res = await CategorieServices.getCategorieBayId(idCateg)
        setCategorieName(res.data.nom)
    }
   async function updateCategorie(e)
   {
      e.preventDefault()
     const Categorie = {"_id":idCateg,"nom":nom}
     await CategorieServices.updateCategorie(Categorie)
      naviger("/admin/Category")
   }
useEffect (()=>{getCategorie()},[])
return (
    <div className="container">
       <h1 className="title">Edit category</h1>
        <Form onSubmit={()=>updateCategorie()}> 
          <FormGroup className="col-sm">
              <Input     id="nom" type="text" 
                         value ={nom}
                         onChange={(e) => setCategorieName(e.target.value)} placeholder="Entrer category..." />
          </FormGroup>
              <Button type="submit" color="primary">Save</Button>{' '}
        </Form>
    </div>
  )
}
export default EditCategory;