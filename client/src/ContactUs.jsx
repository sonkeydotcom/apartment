import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold">Contact Us</h1>
      </header>
      <main className="max-w-4xl mx-auto py-8 px-4">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="flex items-center text-gray-700 mb-2">
                <FaMapMarkerAlt />
                <span className="ml-2">123 Main Street, Anytown, USA</span>
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <FaPhone />
                <span className="ml-2">123-456-7890</span>
              </p>
              <p className="flex items-center text-gray-700 mb-2">
                <FaEnvelope />
                <span className="ml-2">info@example.com</span>
              </p>
            </div>
            <div>
              {/* Add your map component here */}
              <div style={{ height: "300px", width: "100%" }}>
                {/* Embed your map component here */}
                {/* Example: <YourMapComponent /> */}
                {/* If you're using Google Maps, you can embed it like this: */}
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1114.7385541638013!2d-73.97758823907265!3d40.76371762366125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a97f73aeff%3A0x4a3e07b69b278b16!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647396155327!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
