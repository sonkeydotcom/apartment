import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

const PropertyCard = ({ rentals }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <img
      src={
        rentals.image ? rentals.image : "https://via.placeholder.com/400x300"
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/rentals");
        console.log(response.data);
        setRentals(response.data.listings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      location: "123 Main Street, Anytown, USA",
      rent: 2000,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      title: "Cozy House Near the Lake",
      location: "456 Lakeview Drive, Somewhere, USA",
      rent: 2500,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      title: "Cozy House Near the Lake",
      location: "456 Lakeview Drive, Somewhere, USA",
      rent: 2500,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 4,
      title: "Cozy House Near the Lake",
      location: "456 Lakeview Drive, Somewhere, USA",
      rent: 2500,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 5,
      title: "Cozy House Near the Lake",
      location: "456 Lakeview Drive, Somewhere, USA",
      rent: 2500,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 6,
      title: "Cozy House Near the Lake",
      location: "456 Lakeview Drive, Somewhere, USA",
      rent: 2500,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 7,
      title: "Cozy House Near the Lake",
      location: "456 Lakeview Drive, Somewhere, USA",
      rent: 2500,
      image: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-8 text-center">
        <h1 className="text-2xl font-bold">Halstead Properties</h1>
      </header>
      <section className="text-gray-800 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12 bg-zinc-300">
          <div className="w-full md:w-4/5 mx-auto">
            {" "}
            {/* Modified: added w-full and centered the content */}
            <p className="text-base mb-8">
              Please feel free to self schedule below. For your convenience, our
              showing availability is provided on the calendar. Just select a
              time that works for you and our leasing agent will meet you at the
              property at the scheduled time. Thanks!
            </p>
            <p className="text-base font-medium">
              Note: When scheduling your showing, please provide a valid cell
              phone number capable of receiving text messages. A confirmation
              text will be sent to you the day of the showing. If the showing is
              not confirmed via text, your showing will be automatically
              cancelled.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-xl font-bold mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {rentals.map((rentals) => (
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
