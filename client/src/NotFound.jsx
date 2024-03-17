// NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-center mb-8">
        The page you're looking for doesn't exist.
      </p>
      <div className="flex justify-center mb-8">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </Link>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Site Tree</h2>
        <ul className="list-none">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {/* Add more links to your site's pages */}
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
