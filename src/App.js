import { Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 
import Home from './components/Home/Home'; 
import Login from './Pages/Auth/Login'; 
import Register from './Pages/Auth/Register';
import RequireAuth from './Pages/Auth/RequireAuth';
import Booking from './Pages/Booking'; 

function App() {
  return ( 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/booking/:Id' element={
        <RequireAuth> 
          <Booking /> 
        </RequireAuth> } />
         
      </Routes> 
      
  );
}

export default App;
