import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home/Home'; 
import Login from './Pages/Auth/Login'; 
import Register from './Pages/Auth/Register';
import Booking from './Pages/Booking';

function App() {
  return ( 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/booking/:id' element={<Booking />} />
      </Routes>  
  );
}

export default App;
