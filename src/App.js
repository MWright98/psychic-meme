import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [categories] = useState([
    { name: "contact" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "about" },
  ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      {!contactSelected ? (
        <>
          <Header
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          />
          <About />
          <Footer />
        </>
      ) : (
        <>
          <Header
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          />

          <Contact />

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
