import React from "react";
import moment from "moment";

const Modal = ({ isOpen, onClose, date, time, address }) => {
  const formattedDate = moment(date).format("dddd, MMMM Do YYYY");

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Thanks for scheduling!</h1>{" "}
        <p className="text-sm mb-4">
          You will receive an email or text confirmation with your appointment
          details.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Your Appointment </h2>
          <p>Date: {formattedDate}</p>
          <p>Time: {time}</p>
          <p>Address: {address}</p>
        </div>
        {/*<button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={onClose}
        >
          Close
    </button>*/}
      </div>
    </div>
  );
};

export default Modal;
