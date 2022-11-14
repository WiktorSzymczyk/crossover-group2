import "./App.css";
import "./components/home/awards/Awards.css";
import { Awards } from "./components/home/awards/Awards";
import { Location } from "./components/home/location/Location";
import { Agents } from "./components/home/agents/Agents";
import { Empty } from "./components/Empty";
import Price from "./components/home/price/Price";
import Footer from "./components/common/Footer";
import Header from "./components/common/header/Header";
import Featured from "./components/home/featured/Featured";
import Hero from "./components/home/hero/Hero";
import Recent from "./components/home/recent/Recent";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Agents />
      <Empty />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
