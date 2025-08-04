import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <Navbar />   {/* Navbar component */}
      <Home />     {/* Home component */}
      <About />    {/* About component */}
    </div>
  );
}


export default App;
