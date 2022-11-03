import logo from './logo.svg';
import './App.css';
import Bus from './pages/Bus';
import FlightsScd from './pages/Flights_Scd';
import SelectSeatSleeper from './pages/SelectSeatSleeper';
import SelectSeatSeaterOnly from './pages/SelectSeatSeaterOnly';
import SelectSeatSeaterAndBerth from './pages/SelectSeatSeaterAndBerth';
import BusInformation from './pages/BusInformation';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<FlightsScd />} />
        <Route path="SelectSeatSleeper" element={<SelectSeatSleeper />} />
        <Route path="SelectSeatSeaterAndBerth" element={<SelectSeatSeaterAndBerth />} />
        <Route path="SelectSeatSeaterOnly" element={<SelectSeatSeaterOnly />} />

      </Routes>


      {/* <Bus /> */}


      {/* <BusInformation /> */}

    </div>
  );
}

export default App;
