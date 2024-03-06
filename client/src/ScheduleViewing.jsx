import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "./components/Modal";
import moment from "moment";

const ScheduleViewing = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [viewingDate, setViewingDate] = useState("");
  const [viewingTime, setViewingTime] = useState("");
  const [viewingAddress, setViewingAddress] = useState("");
  const [homeDetails, setHomeDetails] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://energetic-tunic-bat.cyclic.app/api/rentals/${id}`
        );
        console.log(response.data);
        setHomeDetails(response.data.listing);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    try {
      const response = await axios.post(
        `https://energetic-tunic-bat.cyclic.app/api/schedule/${id}`,
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          date: formData.preferredDate,
          time: formData.preferredTime,
        }
      );
      console.log(response.data);
      setViewingDate(formData.preferredDate);
      setViewingTime(formData.preferredTime);
      successMessage();
      setModalOpen(true);

      // Redirect to a thank you page
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    console.log(id);
  };

  const formattedDate = moment(formData.preferredDate).format(
    "dddd, MMMM Do YYYY"
  );

  const formattedTime = moment(formData.preferredTime).format(" h:mm: a");

  const successMessage = async () => {
    const response = await axios.post(
      "https://energetic-tunic-bat.cyclic.app/api/mail",
      {
        name: formData.fullName,
        email: formData.email,
        date: formattedDate,
        time: formData.preferredTime,
        address: homeDetails.location,
      }
    );
    console.log(response);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold">Schedule Viewing</h1>
      </header>
      <main className="max-w-2xl mx-auto py-8 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="preferredDate"
            >
              Preferred Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredDate"
              required
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="preferredTime"
            >
              Preferred Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredTime"
              type="time"
              required
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onSubmit={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Schedule Viewing
            </button>
          </div>
        </form>
      </main>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        date={viewingDate}
        time={viewingTime}
        address={homeDetails.location}
      />
      <footer className="bg-slate-800 text-gray-100 py-4 text-center">
        <p>&copy; 2024 Halstead Realty</p>
      </footer>
    </div>
  );
};

export default ScheduleViewing;
