import './App.css'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [datos, setData] = useState();

  useEffect(()=>{
    fetch('http://localhost:5173/api/data')
      .then(response => response.json())
      .then(data => {setData(data)
        console.log(datos)
      })
      .catch(error=> console.log('Error en el FETCH: ',error));
  },[datos]);
  
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cliente' element={<div>CLIENTE</div>}/>
        <Route path='/profesor' element={<div>PROFESOR</div>}/>
        <Route path='/admin' element={<div>ADMIN</div>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
