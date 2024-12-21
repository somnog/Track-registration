import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import TracksPage from "./pages/TracksPage";
import NotFound from "./pages/NotFound";
import Track from "./pages/Track";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className=" font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tracks" element={} /> */}
          <Route path="/tracks/:id" element={<Track />} />
          <Route path="/track-register/:trackId" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
