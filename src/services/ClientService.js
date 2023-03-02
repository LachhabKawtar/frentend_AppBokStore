
import axios  from "axios";
async function getAllClient (){

    return await axios.get("http://localhost:3222/Clients");
}
async function getClientBayId (idC){

    return await axios.get(`http://localhost:3222/Clients/${idC}`)
}
async function deleteClient (idC){

    return await axios.delete(`http://localhost:3222/Clients/${idC}`)
}
async function addClient (client){

    return await axios.post(`http://localhost:3222/Clients`,client)
}
async function updateClient(client)
{
    return   await axios.put(`http://localhost:3222/Clients/${client._id}`,client)
}
const clientServices = {getAllClient, getClientBayId,deleteClient,addClient,updateClient}

export default clientServices;


