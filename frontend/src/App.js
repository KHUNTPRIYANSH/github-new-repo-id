import React, { useState } from "react";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Home from "./components/home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import AdminLogin from "./components/AdminLogin";

import Events from "./components/Events";
import Contact from "./components/Contact";
import Form from "./components/Form";
import NewICard from './components/NewICard';

import ValidationList from "./components/ValidationList";

import Showuser from "./components/Showuser";
import annex from "./components/Context/Context";

import Footer from "./components/Footer";

import Error404 from "./components/Error404";

const App = () => {
  const [loginuser, setloginuser] = useState(false);
  const [currentuser, setcurrentuser] = useState("");
  const [listshow, setlistshow] = useState(false);
  const [clerklogin, setclerklogin] = useState(false);
  const [dydologin, setdydologin] = useState(false);
  const [commisionerlogin, setcommisionerlogin] = useState(false);
  const [useridcard, setuseridcard] = useState(false);
  const [Idcard, setIdcard] = useState("");

  return (
    <Router>
      <annex.Provider
        value={{
          loginuser,
          setloginuser,
          currentuser,
          setcurrentuser,
          listshow,
          setlistshow,
          clerklogin,
          setclerklogin,
          dydologin,
          setdydologin,
          commisionerlogin,
          setcommisionerlogin,
          useridcard,
          setuseridcard,
          Idcard,
          setIdcard,
        }}
      >
        <Nav />
        

        <Routes>
          <Route
            exact
            path="*"
            element={
              <>
                <Error404 />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <div style={{marginLeft:"20px"}}>
                
                <NewICard/>
                
                </div>

                
                
                <About />
                <Contact />
              </>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <>
                <Home />
                {/* <ICard /> */}
                <Events />
                <Contact />
              </>
            }
          />
          {/* <Route path="/hidMenu" element={<HidMenu />} /> */}
          <Route path="/show/:id" element={<Showuser />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/form" element={<Form />} />
          <Route path="/profile" element={<Showuser />} />
          <Route
            path="/list"
            element={
              <>
                <ValidationList />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </annex.Provider>
    </Router>
  );
};

export default App;
