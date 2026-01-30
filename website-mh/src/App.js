import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Hours from "./components/Hours/Hours";
import Location from './components/Location/Location';
import Membership from './components/Membership/Membership';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Membership />
      <Hours />
      <Location />
    </div>
  );
}

export default App;
