import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./pages/Header/Header";
import { LanguageContext } from "./LanguageContext";
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";     
// //core
// import "primereact/resources/primereact.min.css";               
import { useState } from "react";
import React from "react";
        

function App() {

  const [language, setLanguage ] = useState("En");
  return (
    <>
    <LanguageContext.Provider value={{language, setLanguage}}>
      <div className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </Router>
      </div>
    </LanguageContext.Provider>
    </>
  );
}

export default App;
