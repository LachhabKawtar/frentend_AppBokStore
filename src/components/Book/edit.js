import { useEffect, useState } from "react"
import React from 'react';
import { Button, Form, FormGroup, Input,Label,Col, Row} from 'reactstrap'
import  CategorieServices from "../../services/CategorieServices"
import {  useParams } from "react-router-dom"
import ProductServices from "../../services/BookServices"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faEdit,
} from "@fortawesome/free-solid-svg-icons";

function EditBook() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isbn, setISBN] = useState("")
    const [price, setPrice] = useState(0)
    const [selectedCategorie, setSelectedCategorie] = useState(0)
    const [categories, setCategories] = useState([])
    const [author,setAuthor] = useState("")
    const [editor,setEditor] = useState("")
    const [edition_date,setEditionDate] = useState("")
    const [image,setImage] = useState("")
    const {idP} = useParams()
    const [selectedCat, setSelectedCat]=useState(0)
    const navigation = useNavigate()
    useEffect (()=>{
                    getBook()
                    getCategories()
                   }
    ,[])
    async function getBook(){
        const res = await ProductServices.getBookBayId(idP)
   
        setName(res.data.name)
        setDescription(res.data.description)
        setISBN(res.data.isbn)
        setPrice(res.data.price)
        setAuthor(res.data.author)
        setEditor(res.data.editor)
        setImage(res.data.image)
        setEditionDate(res.data.edition_date)
        setSelectedCat(res.data.categorie._id)
        setSelectedCategorie(res.data.categorie.nom)
        
}
    async function getCategories(){
       const result = await CategorieServices.getAllCategories();
       setCategories(result.data)
    }
    async function SaveBook(e) {
        e.preventDefault()
        const book = { "_id":idP ,"name": name, "description": description, "isbn": isbn,"author":author, "editor":editor,
        "edition_date":edition_date,
        "price": price ,
        "image":image,
        "category":categories[selectedCategorie]}
        const res=await ProductServices.updateBook(idP,book)
        navigation("/admin/Book")
    }
    return (
        <div className="container">
            <h3 className="title"> <FontAwesomeIcon icon={faEdit} className="mr-2" />Edit Book</h3>
            <Form className="form" onSubmit={(e) => SaveBook(e)}>
            <Row>
            <Col md={6}>
                <FormGroup >
                <Label for={"name"}>Name</Label>
                    <Input id="name" type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)} placeholder="Entrer name..." />
                
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                   <Label for={"name"}>Description</Label>
                   <Input id="description" type="text"
                         value={description}
                         onChange={(e) => setDescription(e.target.value)} placeholder="Entrer description..." />
                </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for={"isbn"}>ISBN</Label>
                    <Input id="isbn" type="text"
                          value={isbn} 
                          onChange={(e) => setISBN(e.target.value)} placeholder="Entrer isbn..." />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for={"price"}>price</Label>
                    <Input id="price" type="text"
                           value={price} 
                           onChange={(e) => setPrice(e.target.value)} placeholder="Entrer  price..." />
                
                </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for={"author"}>Author</Label>
                    <Input id="author" type="text"
                           value={author} 
                           onChange={(e) => setAuthor(e.target.value)} placeholder="Entrer  author..." />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for={"editor"}>Editor</Label>
                    <Input id="editor" type="text"
                           value={editor} 
                           onChange={(e) => setEditor(e.target.value)} placeholder="Entrer  editor..." />
                </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for={"edition_date"}>Edition date</Label>
                    <Input id="edition_date" type="date"
                           value={edition_date} 
                           onChange={(e) => setEditionDate(e.target.value)} placeholder="Entrer  edition date..." />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup >
                    <Label for="exampleSelect">Selectionnez une catégorie</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={(e) => setSelectedCategorie(e.target.value)}>
                            {
                                     categories.map((elem,index)=>{
                                     var selected = (selectedCat === elem._id) ? true : false;
                                     return <option  key={index} value={index} selected={selected}>{elem.nom}</option>
                                })
                            }        
                    </Input>
                </FormGroup>
                </Col>
                </Row>
                    <Button style={{padding:"6px"}} className ="" type="submit" color="primary">Save change</Button>{' '}
            </Form>
        </div>
    )
}
export default EditBook;