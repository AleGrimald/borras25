import './App.css';
import UserList from './components/UserList';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/clientes' element={<div>CLIENTES</div>} />
          <Route path='/profesor' element={<div>PROFESOR</div>} />
          <Route path='/admin' element={<div>ADMIN</div>} />
          <Route path='/usuarios' element={<UserList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
