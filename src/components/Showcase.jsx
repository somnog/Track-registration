import React from "react";
import showcase from "../assets/showcase.jpg"

const Showcase = () => {
  return (
    <div className="relative top-14  text-white text-center py-28">
      <img
        src={showcase}
        alt="Showcase"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Choose Your Career Path</h2>
        <p className="text-lg mb-6">
          Register for tracks that match your interests.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 "></div>
    </div>
  );
};

export default Showcase;
