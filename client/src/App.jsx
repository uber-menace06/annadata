import './App.css';
import Home from "./components/Home/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} ></Route >
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/Register' element={<Register />} ></Route>
        <Route path='/Dashboard' element={<Dashboard />} ></Route>
      </Routes >
      <Footer />
    </Router >
  );
}

export default App;