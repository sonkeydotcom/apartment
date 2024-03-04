import React, { useState, useEffect } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

const HomeListing = () => {
  const [homeDetails, setHomeDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/rentals/${id}`
        );
        console.log(response.data);
        setHomeDetails(response.data.listing);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const hometails = {
    availability: "Available Now",
    rent: "$2000/month",
    squareFeet: "1500 sq ft",
    location: "123 Main Street, Anytown, USA",
    amenities: ["Swimming Pool", "Gym", "Parking"],
    beds: 3,
    baths: 2,
    imageSrc: "path_to_image.jpg", // Replace with the actual image path
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold">Halstead Properties</h1>
      </header>
      <main className="max-w-2xl mx-auto py-8 px-4">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8 flex">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Property Details
            </h2>
            <p className="text-gray-700 mb-4">
              Availability: {homeDetails.availability}
            </p>
            <p className="text-gray-700 mb-4">Rent: ${homeDetails.rent}</p>
            <p className="text-gray-700 mb-4">
              Security Deposit: ${homeDetails.deposit}
            </p>
            <p className="text-gray-700 mb-4">
              Application Fee: ${homeDetails.fee}
            </p>
            <p className="text-gray-700 mb-4">
              Square Feet: {homeDetails.sqft}
            </p>
            <p className="text-gray-700 mb-4">
              Location: {homeDetails.location}
            </p>
            <p className="text-gray-700 mb-4">
              Utilities: {homeDetails.utilities}
            </p>
            <p className="text-gray-700 mb-4">
              Amenities: {homeDetails.amenities}
            </p>
            <p className="text-gray-700 mb-4">Beds: {homeDetails.beds}</p>
            <p className="text-gray-700 mb-4">Baths: {homeDetails.baths}</p>
            <p className="text-gray-700 mb-4">
              Pet policy:{" "}
              {homeDetails.pets ? "Pets allowed" : "Pets not allowed"}
            </p>
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                <Link to={`/application/${id}`} className="text-white">
                  Apply
                </Link>
              </button>
              {/*<button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                <Link to={`/scheduleviewing/${id}`} className="text-white">
                  Schedule Viewing
                </Link>
              </button> */}
            </div>
          </div>
        </section>
        <footer className="bg-slate-800 text-gray-100 py-4 text-center">
          <p>&copy; 2024 Halstead Realty</p>
        </footer>
      </main>
    </div>
  );
};

export default HomeListing;
