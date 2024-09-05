import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-5 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
