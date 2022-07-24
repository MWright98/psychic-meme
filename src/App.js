import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  const [categories] = useState([
    { name: "contact" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "about" },
  ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
