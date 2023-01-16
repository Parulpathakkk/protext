import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import TextForm from "./components/TextForm"

const App = () => {
  let [mode, setMode] = useState("light");
  let [alert, setalert] = useState(null);
  let showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 800);
  };
  let togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled", "success");
    }
  };
  return (
    <div>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
     
    <Routes>
  
         <Route exact path="/about" element={<About mode={mode}/>}/>
         <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze Below"/>}/>
         
          </Routes>
          </div>
     
      </BrowserRouter>
      </div>
  );
};
export default App;
