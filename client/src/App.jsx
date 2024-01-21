import './App.css';
import React, { useEffect } from 'react';
import { loadUser } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import Home from "./components/Home/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Userhome from "./components/Userhome/Userhome.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Learnmore from './components/Learnmore/Learnmore.jsx';
import Header from './components/Header/Header.jsx';
import Loading from './components/Loading/Loading.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  const { isAuthenticated, loading } = useSelector(state => state.auth)
  return (
    <Router>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/userhome" /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/userhome" element={isAuthenticated ? <Userhome /> : <Navigate to="/login" />} />
          <Route path="/userprofile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
          <Route path="/learnmore" element={<Learnmore />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {!loading && <Footer />}
    </Router >
  );
}

export default App;