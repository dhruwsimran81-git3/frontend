import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Footer from "./components/Footer";
import './assets/css/style.css';
import './assets/css/home.css';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;   
