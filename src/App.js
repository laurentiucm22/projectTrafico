import React from "react";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import FAQSPage from "./Pages/FAQSPage";
import HomePage from "./Pages/HomePage";
import HowToPage from "./Pages/HowToPage";
import { info } from "./components/info";

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage item={info} />
      <HowToPage item={info} />
      <FAQSPage item={info} />
    </div>
  );
}

export default App;
