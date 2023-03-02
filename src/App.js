import './App.css';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Header from './components/EspaceVisiteur/Header';
import BookList from './components/Book/list';
import CategorieList from './components/categorie/CategorieList';
import EditCategorie from './components/categorie/EditCategorie';
import NewBook from './components/Book/new';
import EditBook from './components/Book/edit';
import Content from './components/ResponsableStore/content/content';
import NewCategory from './components/categorie/new';
import CardBook from './components/Book/CardBook';
import DetailBook from './components/Book/DetailBook';
import CardBookCategory from './components/Book/CardBookCategory';
function App(){
    return (
      <Routes>
           <Route path={"/admin"}  element={<Content/>}>
              <Route path={"Book"} element={<BookList/>}></Route>
              <Route path={"Book/new"} element={<NewBook/>}></Route>  
              <Route path={"Book/Edit/:idP"} element={<EditBook/>}></Route>
              <Route path={"Book/detail/:idP"} element={<DetailBook/>}></Route>

              <Route path={"Category"} element={<CategorieList/>}></Route>
              <Route path={"Category/new"} element={<NewCategory/>}></Route>
              <Route path={"Category/Edit/:idCateg"} element={<EditCategorie/>}></Route>
           </Route>
           
           <Route path={"/BookStore"} element={<Header/>}>
              <Route path={"Book"} element={<CardBook/>}></Route>
              <Route path={"Book/detail/:idP"} element={<DetailBook/>}></Route>
              <Route path={"Category/:idCateg"} element={<CardBookCategory/>}></Route>
           </Route>
    </Routes>);
  }
  export default App;
