import React from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Tracks from "../components/Tracks";
import Footer from "../components/Footer";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Tracks />
      {/* <Stats /> */}
      <Footer />
    </div>
  );
};

export default Home;
