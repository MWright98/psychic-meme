import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [categories] = useState([
    { name: "contact" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "about" },
  ]);

  document.title = "Michael Wright Portfolio";

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  switch (currentCategory) {
    default:
      return (
        <div>
          <Header
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <About />
          <Footer />
        </div>
      );

    case 0:
      return (
        <div>
          <Header
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <Contact />
          <Footer />
        </div>
      );
    case 1:
      return (
        <div>
          <Header
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <Portfolio />
          <Footer />
        </div>
      );
    case 2:
      return (
        <div>
          <Header
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <Resume />
          <Footer />
        </div>
      );
    case 3:
      return (
        <div>
          <Header
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <About />
          <Footer />
        </div>
      );
  }
}

export default App;
