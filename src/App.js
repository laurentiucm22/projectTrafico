import React from "react";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import HowToPage from "./Pages/HowToPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <HowToPage />
    </div>
  );
}

export default App;
