import './App.css'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import UserList from './component/UserList'
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cliente' element={<div>CLIENTE</div>}/>
        <Route path='/profesor' element={<div>PROFESOR</div>}/>
        <Route path='/admin' element={<div>ADMIN</div>}/>

        <Route path='/usuarios' element={<UserList />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
