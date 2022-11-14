import "./App.css";
import "./components/home/awards/Awards.css";
import { Awards } from "./components/home/awards/Awards";
import { Location } from "./components/home/location/Location";
import { Agents } from "./components/home/agents/Agents";

function App() {
  return (
    <div className="App">
      <Awards />
      <Location />
      <Agents />
    </div>
  );
}

export default App;
