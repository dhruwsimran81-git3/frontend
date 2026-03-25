import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './assets/css/style.css';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;   
