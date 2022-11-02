import logo from './logo.svg';
import './App.css';
import Bus from './pages/Bus';
import FlightsScd from './pages/Flights_Scd';
import SelectSeatSleeper from './pages/SelectSeatSleeper';
import SelectSeatSeaterOnly from './pages/SelectSeatSeaterOnly';
import SelectSeatSeaterAndBerth from './pages/SelectSeatSeaterAndBerth';
import BusInformation from './pages/BusInformation';

function App() {
  return (
    <div className="App">
      {/* <Bus /> */}
      <FlightsScd />
      {/* <SelectSeatSleeper /> */}
      {/* <SelectSeatSeaterAndBerth /> */}
      {/* <SelectSeatSeaterOnly /> */}
      {/* <BusInformation /> */}

    </div>
  );
}

export default App;
