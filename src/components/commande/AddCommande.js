import { useEffect, useState } from "react"
import React from 'react';
import { Button, Form, FormGroup, Input,Label } from 'reactstrap';
import CommandeServices from "../../services/CommandeServices";
import { useNavigate } from "react-router-dom";
import clientServices from "../../services/ClientService";
function AddCommande() {
    const [date_Commande, setDateCommande] = useState("")    //variable state -> last_name
    //setDateCommande -> fct pour changer la variable state
    const [date_reglement, setDateReglement] = useState("")
    const [total, settotal] = useState("")
    const [etat, setEtat] = useState("")
    const [client, setclient] = useState([])
    const naviger = useNavigate()
    useEffect (()=>{getClients();},[])
    async function getClients(){
       const result = await clientServices.getAllClient();
       setclient(result.data)
    }
    async function newCommande(e) {
        //e.preventDefault()
        const Commande = { "date_Commande": date_Commande, "date_reglement": date_reglement, "total": total, "etat": etat }
        await CommandeServices.addCommande(Commande);
        // naviger("/Commandes")
    }
    return (
        <div className="container">
            <h1 className="title">Nouveau Commande</h1>
            <Form className="form" onSubmit={() => newCommande()}>
                <FormGroup className="col-sm-6">
                    <Input id="date_Commande" type="text"
                        onChange={(e) => setDateCommande(e.target.value)} placeholder="Entrer date commande..." />
                </FormGroup>
                <FormGroup className="col-sm-6">
                    <Input id="date_reglement" type="text"
                        onChange={(e) => setDateReglement(e.target.value)} placeholder="Entrer date reglement..." />
                </FormGroup>
                <FormGroup className="col-sm-6">
                    <Input id="total" type="text"
                        onChange={(e) => settotal(e.target.value)} placeholder="Entrer total..." />
                </FormGroup>
                <FormGroup className="col-sm-6">
                    <Input id="etat" type="text"
                        onChange={(e) => setEtat(e.target.value)} placeholder="Entrer etat..." />
                </FormGroup>

                <FormGroup  className="col-sm-6">
                    <Label for="exampleSelect">Selectionnez un client</Label>
                    <Input type="select" name="select" id="exampleSelect"  >
                            {
                                client.map((elem,index)=>{
                                    return <option  key={index} value={index}>{elem.last_name} {elem.first_name}</option>
                                })
                            }        
                    </Input>
                </FormGroup>
                
                <Button className ="" type="submit" color="primary">Ajouter+</Button>{' '}
            </Form>
        </div>
    )
}
export default AddCommande;