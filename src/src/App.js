import Navbar from './components/Navbar/navbar';
import {useEffect, useState} from 'react';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import BasicExample from './components/bootstrap/tarjeta';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting='Lista de Productos' />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
