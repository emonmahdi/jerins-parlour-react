import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home/Home'; 
import Login from './Pages/Auth/Login'; 
import Register from './Pages/Auth/Register';

function App() {
  return ( 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>  
  );
}

export default App;
