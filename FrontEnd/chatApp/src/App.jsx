import { Routes, Route } from 'react-router-dom'; // ייבוא נכון של Route
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/LogIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
