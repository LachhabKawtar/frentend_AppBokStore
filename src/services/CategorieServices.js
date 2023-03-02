
import axios  from "axios";
async function getAllCategories (){

    return await axios.get("http://localhost:3222/Categories");
}
async function getCategorieBayId (idC){

    return await axios.get(`http://localhost:3222/Categories/${idC}`)
}
async function deleteCategorie (idC){

    return await axios.delete(`http://localhost:3222/Categories/${idC}`)
}
async function addCategorie (Categorie){

    return await axios.post(`http://localhost:3222/Categories`,Categorie)
}
async function updateCategorie(Categorie)
{
    return   await axios.put(`http://localhost:3222/Categories/${Categorie._id}`,Categorie)
}
const CategorieServices = {getAllCategories, getCategorieBayId,deleteCategorie,addCategorie,updateCategorie}

export default CategorieServices;


