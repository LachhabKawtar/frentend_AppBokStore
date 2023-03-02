import BookServices from "../../services/BookServices"
import { useState, useEffect } from "react"
import { 
    Button, 
    Card, 
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,CardImg
} from "reactstrap";
import React from "react";
import { faAdmini,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
function CardBook (){
  const [Book, setBook] = useState([])
  async function getBook(){
     const result = await BookServices.getAllBook();
     setBook(result.data)
  }
  useEffect (()=>{getBook();},[])
    return (
    <React.Fragment>
    <div id ="explorer">
    <Row>
    {Book.map((elem,i)=>{
      return <Card className="bg-light border-top mt-2  border-warning"
              key={i} 
              style={{
                width: '14rem',
                margin: "8px",
                height: "24rem"
              }}
               >
              <CardImg
              style={{
                    width: '11rem',
                    height:'11rem',
                    margin:'21px'
              }}
              const a = {elem.image}
                alt="Sample"
                src={(`/assets/images/${elem.image}`)}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {elem.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                 Price : {elem.price} $
                </CardSubtitle>
                <Link  tag={Link} to={`detail/${elem._id}`}>
                <Button color="primary">
                  Details
                </Button>
                </Link>
 
              </CardBody>
            </Card>
    })}
      </Row>
      </div>
      </React.Fragment>
    )
         
}export default CardBook;