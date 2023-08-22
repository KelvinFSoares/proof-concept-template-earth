import React from "react";

const HeroBanner = ({ title, subtitle }) => (
  <div className="flex items-center justify-center h-screen bg-green-400">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-xl text-white">{subtitle}</p>
    </div>
  </div>
);

export default HeroBanner;
