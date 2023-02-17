import React from "react"; 
import Navebar from "./Components/Navebar";
import './assets/index.css'
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Offer from "./Components/Offer";
import About from "./Components/About"; 
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
   <Navebar/>
   <Header/>
   <Feature/>
   <Offer/>
   <About/>
   <Contact/>
    </div>
  );
}

export default App;
