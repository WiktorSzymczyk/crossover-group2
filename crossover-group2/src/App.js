import "./App.css";
import "./components/home/awards/Awards.css";
import { Awards } from "./components/home/awards/Awards";
import { Location } from "./components/home/location/Location";
import { Agents } from "./components/home/agents/Agents";
import { Empty } from "./components/Empty";

function App() {
  return (
    <div className="App">
      <Awards />
      <Location />
      <Agents />
      <Empty />
    </div>
  );
}

export default App;
