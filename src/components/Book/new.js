import { useEffect, useState } from "react"
import React from 'react';
import { Button, Form, FormGroup, Input,Label,Col,Row } from 'reactstrap';
import  CategorieServices from "../../services/CategorieServices";
import { useNavigate } from "react-router-dom";
import BookServices from "../../services/BookServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from "@fortawesome/free-solid-svg-icons";
function NewBook() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isbn, setISBN] = useState("")
    const [author,setAuthor] = useState("")
    const [editor,setEditor] = useState("")
    const [edition_date,setEditionDate] = useState(0)
    const [image,setImage] = useState("ccc")
    const [price, setPrice] = useState(0)
    const [selectedCategorie, setSelectedCategorie] = useState(0)
    const [categories, setCategories] = useState([])
    const naviger = useNavigate()
    useEffect (()=>{getCategories();},[])
    async function getCategories(){
       const result = await CategorieServices.getAllCategories();
       setCategories(result.data)
    }
    async function newBook(e) {
        e.preventDefault()
        const book = { "name": name, "description": description, "isbn": isbn,"author":author, "editor":editor,
        "edition_date":edition_date,
        "price": price ,
        "image":image,
        "category":categories[selectedCategorie]}
        await BookServices.addBook(book);
        naviger("/admin/Book")
    }
    return (
        <div className="container">
            <h3 className="title"><FontAwesomeIcon icon={faAdd} className="mr-2"/>New book</h3>
            <Form className="form" onSubmit={(e) => newBook(e)}>
          <Row>
              <Col md={6}>
                    <FormGroup >
                        <Label for='name'>Name</Label>
                        <Input id="name" type="text"
                            onChange={(e) => setName(e.target.value)} placeholder="Entrer name..." />
                    </FormGroup>
              </Col>
              <Col md={6}>
                    <FormGroup>
                       <Label for='description'>Description</Label>
                        <Input id="description" type="text"
                            onChange={(e) => setDescription(e.target.value)} placeholder="Entrer description..." />
                    </FormGroup>
             </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for='isbn'>ISBN</Label>
                        <Input id="isbn" type="text"
                            onChange={(e) => setISBN(e.target.value)} placeholder="Enter isbn..." />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup >
                        <Label for='price'>Price</Label>
                        <Input id="price" type="text"
                            onChange={(e) => setPrice(e.target.value)} placeholder="Enter  price..." />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                 <Col md={6}>
                    <FormGroup>
                        <Label for='author'>Author</Label>
                        <Input id="author" type="text"
                            onChange={(e) => setAuthor(e.target.value)} placeholder="Enter  author..." />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                        <Label for='editor'>Editor</Label>
                        <Input id="editor" type="text"
                            onChange={(e) => setEditor(e.target.value)} placeholder="Entrer  editor..." />
                    </FormGroup>
                  </Col>
            </Row>
            <Row>
                 <Col md={6}>
                    <FormGroup >
                        <Label for='edition_date'>Edition date</Label>
                        <Input id="edition_date" type="date"
                            onChange={(e) => setEditionDate(e.target.value)} placeholder="Entrer  edition date..." />
                    </FormGroup>
                 </Col>
                 <Col md={6}>
                    <FormGroup>
                        <Label for='image'>Image</Label>
                        <Input id="image" type="text"
                            onChange={(e) => setImage(e.target.value)} placeholder="Selectionnez image..." />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="category">Select  category</Label>
                        <Input type="select" name="select" id="exampleSelect" onChange={(e) => setSelectedCategorie(e.target.value)}>
                                {
                                        categories.map((elem,index)=>{
                                        return <option  key={index} value={index}>{elem.nom}</option>
                                    })
                                }        
                        </Input>
                    </FormGroup>
                </Col>
                </Row>
                    
                            <Button  type="submit" color="primary">  
                            <FontAwesomeIcon  icon={faAdd}/> <span>Add</span>
                            </Button>{' '}
                    
               
          
            </Form>
        </div>
    )
}
export default NewBook;

