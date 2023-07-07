import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCountry="England" />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
