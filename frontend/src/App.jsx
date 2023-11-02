import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/Index';
import ShowCampground from './pages/ShowCampground';
import NewCampground from "./pages/NewCampground";
// import EditBook from './pages/EditBook';
// import DeleteBook from './pages/DeleteBook';
// import Spinner from './components/Spinner';


import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/campgrounds' element = {<Index/>} />
        <Route path='/campgrounds/new' element = {<NewCampground/>} />
        <Route path='/campgrounds/details/:id' element = {<ShowCampground/>} />
        {/* <Route path='/books/edit/:id' element = {<EditBook/>} /> */}
        {/* <Route path='/books/delete/:id' element = {<DeleteBook/>} /> */}
      </Routes> 
    </>
  );
}


