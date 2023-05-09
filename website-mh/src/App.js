import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Material from "./components/Material/Material";
import Hours from "./components/Hours/Hours";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Hours />
      {/* <Material /> */}
    </div>
  );
}

export default App;
