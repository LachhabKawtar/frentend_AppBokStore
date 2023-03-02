import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faShoppingCart, faBook, faRegistered, faSignIn,faPaperPlane}from '@fortawesome/free-solid-svg-icons'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Container,
    Jumbotron,
    Row,
    Col,
    Button
} from 'reactstrap';
import React from 'react';
import {useState } from 'react'
import Footer from './Footer';
import { Outlet,Link } from 'react-router-dom';
import SearchCategory from '../categorie/searchCategory';
function  Header(){
    const [isOpen, setIsOpen] = useState(false)
    return ( 
 <React.Fragment>
         <Navbar className={"header"}   dark expand="md">
         <h3><span><FontAwesomeIcon icon={faBook} className="mr-2" /></span>Book store</h3>
                <div className="container">
                   <NavbarToggler onClick={() => {setIsOpen(!isOpen) }} />
                   <NavbarBrand className="mr-auto" href="/">
                    </NavbarBrand>
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                           <NavItem>
                            <SearchCategory/>
                           </NavItem> 
                                
                            <NavItem>
                                    <NavLink  tag={Link} to={"Book"}><FontAwesomeIcon icon={faBook} className="mr-2"/>Book</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" href ="/Commandes"><FontAwesomeIcon icon={faShoppingCart}/>Basket</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" href="/Categories"><FontAwesomeIcon icon={faRegistered} className="mr-2"/>Register</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" href="/Categories"><FontAwesomeIcon icon={faSignIn} className="mr-2"/>SingIn</NavLink>
                            </NavItem>
                    </Nav>
                    </Collapse>     
                </div>
         </Navbar>
         <Jumbotron>
          <Container >
          <Row>
            <Col>
            <Row >
              <div className="col-12 col-sm-6">
                <h1>Welcome to our book store</h1>
                <p>"La lecture est une porte  ouverte sur un monde enchanté."</p>
                <Button color="warning" href="#explorer"><FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Explore Now</Button>
              </div>
            </Row>
            </Col>
            <Col>
            <Row >
              <div className="col-12 col-sm-6">
              </div>
            </Row>
            </Col>
            </Row>
          </Container>
         </Jumbotron>  
         <Container >
          <div className='row row-content '>
             <Outlet/>
          </div>
         </Container>
         <Footer/>
 </React.Fragment>     
    )
}export default Header;