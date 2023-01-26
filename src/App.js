//import logo from './logo.svg';
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./index.css"
//import App from "./App";
//import ReactDOM from 'react-dom';



function App() {
  const title = "Purity Irungu website";
  //const name = "Purity Irungu";

  return (
    <div className="App">
     <Navbar />
      
      <div className="content">
        <h1>{title}</h1>
       <Home />
      </div>
    </div>
  );
}

export default App;
