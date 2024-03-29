import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateListingPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    rent: "",
    beds: "",
    baths: "",
    sqft: "",
    location: "",
    description: "",
    utilities: "",
    appliances: "",
    amenities: "",
    availability: "",
    fee: "",
    deposit: "",
    leaseLength: "",
    pets: "",
    showing: "",
    images: [],
    parking: "",
    laundry: "",
    listedbyName: "",
    listedbyEmail: "",
    listedbyPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create a new FormData instance
    const data = new FormData();

    // Append all form fields to the FormData instance
    for (const key in formData) {
      if (key === "images") {
        // Append each file to the FormData instance
        for (const file of formData.images) {
          data.append(key, file);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "https://apartment-1-a24r.onrender.com/api/rentals",
        data // Send the FormData instance
      );
      navigate(`/detail/${response.data.createdListing._id}`); //navigate(`/homelisting/${response.createdListing._id}`);
      setIsLoading(false);

      console.log(response.data);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Listing</h1>
      {/* Input fields */}

      <form encType="multipart/form-data" className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="rent" className="block mb-1">
            Rent
          </label>
          <input
            type="text"
            id="rent"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="beds" className="block mb-1">
            Beds
          </label>
          <input
            type="text"
            id="beds"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="baths" className="block mb-1">
            Baths
          </label>
          <input
            type="text"
            id="baths"
            name="baths"
            value={formData.baths}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="sqft" className="block mb-1">
            Square Feet
          </label>
          <input
            type="text"
            id="sqft"
            name="sqft"
            value={formData.sqft}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          ></textarea>
        </div>
        <div>
          <label htmlFor="utilities" className="block mb-1">
            Utilities
          </label>
          <input
            type="text"
            id="utilities"
            name="utilities"
            value={formData.utilities}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="appliances" className="block mb-1">
            Appliances
          </label>
          <input
            type="text"
            id="appliances"
            name="appliances"
            value={formData.appliances}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="amenities" className="block mb-1">
            Amenities
          </label>
          <input
            type="text"
            id="amenities"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="availability" className="block mb-1">
            Availability
          </label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="fee" className="block mb-1">
            Fee
          </label>
          <input
            type="text"
            id="fee"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="deposit" className="block mb-1">
            Deposit
          </label>
          <input
            type="text"
            id="deposit"
            name="deposit"
            value={formData.deposit}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="leaseLength" className="block mb-1">
            Lease Length
          </label>
          <input
            type="text"
            id="leaseLength"
            name="leaseLength"
            value={formData.leaseLength}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        {/* Listed By */}
        <div>
          <label htmlFor="listedbyName" className="block mb-1">
            Listed By Name
          </label>
          <input
            type="text"
            id="listedbyName"
            name="listedbyName"
            value={formData.listedbyName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="listedbyEmail" className="block mb-1">
            Listed By Email
          </label>
          <input
            type="email"
            id="listedbyEmail"
            name="listedbyEmail"
            value={formData.listedbyEmail}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="listedbyEmail" className="block mb-1">
            Listed By Phone
          </label>
          <input
            type="tel"
            id="listedbyPhone"
            name="listedbyPhone"
            value={formData.listedbyPhone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="parking" className="block mb-1">
            Parking
          </label>
          <input
            type="text"
            id="parking"
            name="parking"
            value={formData.parking}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="laundry" className="block mb-1">
            Laundry
          </label>
          <input
            type="text"
            id="laundry"
            name="laundry"
            value={formData.laundry}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="pets" className="block mb-1">
            Pets
          </label>
          <select
            id="pets"
            name="pets"
            value={formData.pets}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option value="">Select</option>
            <option value="true">Allowed</option>
            <option value="false">Not Allowed</option>
          </select>
        </div>
        <div>
          <label htmlFor="showing" className="block mb-1">
            Showing
          </label>
          <select
            id="showing"
            name="showing"
            value={formData.showing}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="images" className="block mb-1">
            Images
          </label>
          <input
            type="file"
            accept="image/*"
            name="images"
            onChange={(e) => {
              setFormData({ ...formData, images: e.target.files });
            }}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            multiple
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {isLoading ? "Creating listing..." : "Create Listing"}
        </button>
      </form>
    </div>
  );
};

export default CreateListingPage;
