import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <div>
        <Footer />
      </div>
    </div>
  );
}
