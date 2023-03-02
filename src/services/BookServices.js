
import axios  from "axios";
async function getAllBook(){

    return await axios.get("http://localhost:3222/Book");
}
async function getBookBayId (idBook){
    return await axios.get(`http://localhost:3222/Book/${idBook}`)
}
async function deleteBook (idBook){

    return await axios.delete(`http://localhost:3222/Book/${idBook}`)
}
async function addBook (book){

    return await axios.post(`http://localhost:3222/Book`,book)
}
async function updateBook(idBook,book)
{
    return   await axios.put(`http://localhost:3222/Book/${idBook}`,book)
}
async function getBookCategory(idCateg)
{
    return   await axios.get(`http://localhost:3222/Book/BooksCategory/${idCateg}`)
}
const Bookervices = {getAllBook, getBookBayId,deleteBook,addBook,updateBook,getBookCategory}

export default Bookervices;


