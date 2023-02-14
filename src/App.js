//import logo from './logo.svg';
import React from "react";
//import Navbar from "./Navbar";
//import Home from "./Home";
import "./index.css";
//import LightDarkTheme from "./components/LightDarkTheme"
import Navbar from "./components/Navbar";
// import Hello from "./components/Hello";
// import Profile from "./components/Profile";
// import Counter from "./components/Counter";
//import App from "./App";
//import ReactDOM from 'react-dom';



function App() {
  //const title = "Purity Irungu website";
  //const name = "Purity Irungu";

  return (
    <div className="App">
      <Navbar />
     {/* <Profile name="Irungu" lastname="Purity" />
     <Profile name="Mike" lastname="Wayne" />
     <Profile name="Lucy" lastname="Njambi "/> */}
     {/* <Navbar /> */}
     {/* <LightDarkTheme /> */}
     {/* <Hello />
     <Profile />
     <Counter /> */}
      
      {/* <div className="content">
        <h1>{title}</h1>
       <Home />
      </div> */}
    </div>
  );
}

export default App;
