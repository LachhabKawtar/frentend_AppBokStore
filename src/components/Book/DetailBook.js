import { useEffect, useState,Link } from "react"
import React from 'react';

import  CategorieServices from "../../services/CategorieServices"
import {  useParams } from "react-router-dom"
import ProductServices from "../../services/BookServices"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {
faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { 
    Button, 
    Row,
    Col,
    Container,

} from "reactstrap";
import CardBook from "./CardBook";

function DetailBook() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isbn, setISBN] = useState("")
    const [price, setPrice] = useState(0)
    const [author,setAuthor] = useState("")
    const [editor,setEditor] = useState("")
    const [edition_date,setEditionDate] = useState("")
    const [image,setImage] = useState("")
    const {idP} = useParams()
    const navigation = useNavigate()
    useEffect (()=>{
                    getBook()
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
}
    return (
      <>
        
        <Col md={4}>
        <img
                  style={{
                        width: '16rem',
                        height:'20rem',
                       
                  }}
                  alt="Card"
                  src={(`/assets/images/${image}`)}
        />
        </Col >
        <Col  md={4}>
         <h3>{name}</h3>
         <p>{description}
           <br/> By {author} (Author)</p>
          <p class="bg-light border-top mt-2  border-warning" >Price: {price} DH
          <br/> Edition date: {edition_date}
          <br/>Editor: {editor}
         </p>
         <Button color='warning'> Add to cart</Button>
        </Col> 
        <CardBook/>       
      </>
    )
}
export default DetailBook;