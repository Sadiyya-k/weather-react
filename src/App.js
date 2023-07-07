import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      Weather App
      <Weather />
      <div>
        <Footer />
      </div>
    </div>
  );
}
