// Spinner.js
import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-12 h-12 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin mb-2"></div>
      <p className="text-gray-600">Fetching Listings...</p>
    </div>
  );
};

export default Spinner;
