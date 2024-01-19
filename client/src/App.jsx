import './App.css';
import Home from "./components/Home/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learnmore from './components/Learnmore/Learnmore.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route >
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/learnmore' element={<Learnmore />} ></Route>
      </Routes >
      <Footer />
    </Router >
  );
}

export default App;