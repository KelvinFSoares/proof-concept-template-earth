import React from "react";

const Header = ({ data }) => (
  <header className="flex items-center justify-center h-24 bg-gradient-to-r from-blue-500 to-green-500">
    <h1 className="text-4xl font-bold text-white">{data?.headerTitle}</h1>
  </header>
);

export default Header;
