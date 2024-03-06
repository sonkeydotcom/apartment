import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import hal from "./assets/halstead.svg";
import Spinner from "./components/Spinner";

const PropertyCard = ({ rentals }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <img
      src={
        rentals.images && rentals.images[0]
          ? rentals.images[0]
          : "https://via.placeholder.com/400x300"
      }
      alt={rentals.title}
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <h2 className="text-xl font-bold text-gray-800">{rentals.title}</h2>
    <p className="text-gray-600">{rentals.location}</p>
    <div className="flex justify-between items-center mt-4">
      <p className="text-gray-700">${rentals.rent}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        <Link to={`/homelisting/${rentals._id}`} className="text-white">
          View Details
        </Link>
      </button>
    </div>
  </div>
);

const Home = () => {
  const [rentals, setRentals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://energetic-tunic-bat.cyclic.app/api/rentals"
        );

        setRentals(response.data.listings);
        setIsLoading(false);
        response.data.listings.length === 0 ? console.log("No data") : null;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredRentals = rentals.filter((rental) =>
    rental.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedRentals = filteredRentals.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-2 text-center">
        <img src={hal} alt="Halstead Properties" className="w-auto mx-auto" />
      </header>

      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <h1 className="flex justify-center items-center text-2xl mx-auto font-bold my-4">
          Welcome to Halstead Properties
        </h1>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-md p-2 mr-2"
            />
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="asc">Sort A-Z</option>
              <option value="desc">Sort Z-A</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="location">Location</option>
            </select>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-xl font-bold mb-4">Featured Properties</h2>
        {isLoading ? (
          <Spinner />
        ) : rentals.length === 0 ? (
          <p>No Listing Available...</p>
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sortedRentals.map((rentals) => (
            <PropertyCard key={rentals._id} rentals={rentals} />
          ))}
        </div>
      </main>
      <footer className="bg-slate-800 text-gray-100 py-4 text-center">
        <p>&copy; 2024 Halstead Realty</p>
      </footer>
    </div>
  );
};

export default Home;
