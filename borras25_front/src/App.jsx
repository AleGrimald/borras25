import './App.css';
import UserList from './component/UserList';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Login from './component/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [btnLogin, setBtnLogin] = useState(true);
  const navegador = useNavigate();
  

  const manejoLogin= ()=>{
    setBtnLogin(btnLogin => !btnLogin);
    btnLogin?navegador('/login'):navegador('/');    
  }

  return (
    <div className='App'>
      <Header manejoLogin={manejoLogin}/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login estado={btnLogin}/>} />
        <Route path='/profesor' element={<div>PROFESOR</div>} />
        <Route path='/admin' element={<div>ADMIN</div>} />
        <Route path='/usuarios' element={<UserList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
