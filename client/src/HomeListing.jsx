import React, { useState, useEffect } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { FcCalendar, FcHome, FcRuler } from "react-icons/fc";
import { MdOutlinePets } from "react-icons/md";
import {
  FaDollarSign,
  FaParking,
  FaMapMarkerAlt,
  FaQuoteLeft,
} from "react-icons/fa";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

const HomeListing = () => {
  const [homeDetails, setHomeDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apartment-1-a24r.onrender.com/api/rentals/q?id=${id}`
        );
        console.log(response.data);
        setHomeDetails(response.data.listing);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold">Halstead Properties</h1>
      </header>
      <main className="max-w-2xl mx-auto py-8 px-4">
        <section className="bg-zinc-300 p-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-base text-gray-800 mb-8">
              Please feel free to self schedule below. For your convenience, our
              showing availability is provided on the calendar. Just select a
              time that works for you and the leasing agent/landlord will meet
              you at the property at the scheduled time. Thanks!
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

        {homeDetails.images ? null : <Spinner />}
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
            <p className="text-gray-700 text-xl mb-4">
              <span className="font-bold">${homeDetails.rent}</span>/mo{" "}
              <span className="font-bold">{homeDetails.beds}</span> bd |{" "}
              <span className="font-bold">{homeDetails.baths}</span> ba |{" "}
              <span className="font-bold">{homeDetails.sqft} </span> sqft
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="flex items-center text-gray-700 mb-2">
                  <FcCalendar />
                  <span className="font-bold"> Availability:</span>{" "}
                  {homeDetails.availability}
                </p>

                <p className="flex items-center text-gray-700 mb-2">
                  <FaDollarSign />
                  <span className="font-bold"> Deposit & Fees: </span> $
                  {homeDetails.deposit},
                  {homeDetails.fee ? ` $${homeDetails.fee}` : null}{" "}
                </p>

                <p className="flex items-center text-gray-700 mb-2">
                  <FaMapMarkerAlt />
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
                <p className="text-gray-700 font-bold mb-2"> Features </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaParking />
                  <span> Attached Garage </span>{" "}
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <MdOutlineLocalLaundryService />
                  <span>
                    {" "}
                    {homeDetails.laundry
                      ? homeDetails.laundry
                      : "Contact agent"}{" "}
                  </span>{" "}
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <MdOutlinePets />
                  <span>
                    {" "}
                    {homeDetails.pets
                      ? " Pets allowed"
                      : " Pets not allowed"}{" "}
                  </span>{" "}
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaQuoteLeft />
                  {homeDetails.description
                    ? homeDetails.description
                    : "No description available"}
                </p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/application/${id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Apply
                  </Link>

                  {homeDetails.showing == true ? (
                    <Link
                      to={`/scheduleviewing/${id}`}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                      Schedule Viewing
                    </Link>
                  ) : null}
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
