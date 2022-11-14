import React from "react";
import Recent from "../components/home/recent/Recent";
import Hero from "../components/home/hero/Hero";
import Featured from "../components/home/featured/Featured";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
    </>
  );
};

export default Home;
