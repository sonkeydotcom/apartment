import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GetStarted = () => {
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
  const [moveInDate, setMoveInDate] = useState("");

  const handleMoveInDateChange = (e) => {
    setMoveInDate(e.target.value);
  };

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-gray-200 rounded-md p-4 mb-4">
        <p className="font-bold">Rental Application Requirements:</p>
        <p>
          To complete this rental application, you must be prepared to provide:
        </p>
        <ul className="list-disc list-inside">
          <li>A copy of a valid form of identification</li>
          <li>Proof of income</li>
          <li>Contact information for your rental references</li>
          <li>
            Note: Most properties require that applicant combined gross income
            is at least two (2) times the monthly rent amount
          </li>
          <li>
            Each resident over the age of 18 must submit a separate rental
            application
          </li>
        </ul>
        <p>
          Application Fee: ${homeDetails.fee}.00 (Refundable if Application is
          not approved)
        </p>
      </div>

      {/* Input field to select move-in date */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="moveInDate"
        >
          Desired Move-in Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="moveInDate"
          type="date"
          value={moveInDate}
          onChange={handleMoveInDateChange}
        />
      </div>
    </main>
  );
};

export default GetStarted;
