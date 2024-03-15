import React, { useState, useEffect } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeListing = () => {
  const [homeDetails, setHomeDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://energetic-tunic-bat.cyclic.app/api/rentals/q?id=${id}`
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold">Halstead Properties</h1>
      </header>
      <main className="max-w-2xl mx-auto py-8 px-4">
        <section className="bg-zinc-300  p-6 mb-8">
          <div className="max-w-5xl mx-auto">
            {" "}
            {/* Adjusted: added max-w-5xl */}
            <p className="text-base text-gray-800 mb-8">
              Please feel free to self schedule below. For your convenience, our
              showing availability is provided on the calendar. Just select a
              time that works for you and our leasing agent will meet you at the
              property at the scheduled time. Thanks!
            </p>
            <p className="text-base text-gray-800 font-medium">
              Note: When scheduling your showing, please provide a valid cell
              phone number capable of receiving text messages. A confirmation
              text will be sent to you the day of the showing. If the showing is
              not confirmed via text, your showing will be automatically
              cancelled.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          {homeDetails.images && homeDetails.images.length > 0 && (
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {homeDetails.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={
                      image ? `${image}` : "https://via.placeholder.com/400x300"
                    }
                    alt={`Property ${index + 1}`}
                    className="rounded-lg w-full h-70 object-cover mb-4"
                  />
                </div>
              ))}
            </Slider>
          )}

          <div className="p-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Property Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Availability:</span>{" "}
                  {homeDetails.availability}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Rent:</span> ${homeDetails.rent}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Security Deposit:</span> $
                  {homeDetails.deposit}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Application Fee:</span> $
                  {homeDetails.fee}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Square Feet:</span>{" "}
                  {homeDetails.sqft}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Location:</span>{" "}
                  {homeDetails.location}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Utilities:</span>{" "}
                  {homeDetails.utilities}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Amenities:</span>{" "}
                  {homeDetails.amenities}
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Beds:</span> {homeDetails.beds}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Baths:</span> {homeDetails.baths}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Pet Policy:</span>{" "}
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
