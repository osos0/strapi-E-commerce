// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/main.scss";
import Home from "./pages/Home.jsx";
import Header1 from "./components/Header1.jsx";
import Header2 from "./components/Header2.jsx";
import Header3 from "./components/Header3.jsx";
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
