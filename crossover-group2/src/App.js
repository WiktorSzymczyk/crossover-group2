import "./App.css";
import "./components/home/awards/Awards.css";
import { Awards } from "./components/home/awards/Awards";
import { Location } from "./components/home/location/Location";
import { Agents } from "./components/home/agents/Agents";
import { Empty } from "./components/Empty";
import Price from "./components/home/price/Price";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <Price />
      <Awards />
      <Location />
      <Agents />
      <Empty />
      <Footer />
    </div>
  );
}

export default App;
