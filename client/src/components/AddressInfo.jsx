import React, { useState } from "react";

const AddressInfo = ({ formData, setFormData }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Address Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Address"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="City"
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="State"
          />
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-700"
          >
            Zip
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Zip"
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Country"
          />
        </div>
        <div>
          <label
            htmlFor="landlord"
            className="block text-sm font-medium text-gray-700"
          >
            Landlord
          </label>
          <input
            type="text"
            id="landlord"
            name="landlord"
            value={formData.landlord}
            onChange={(e) =>
              setFormData({ ...formData, landlord: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Landlord"
          />
        </div>
        <div>
          <label
            htmlFor="landlordPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Landlord Phone
          </label>
          <input
            type="tel"
            id="landlordPhone"
            name="landlordPhone"
            value={formData.landlordPhone}
            onChange={(e) =>
              setFormData({ ...formData, landlordPhone: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Landlord Phone"
          />
        </div>
        <div>
          <label
            htmlFor="reasonForLeaving"
            className="block text-sm font-medium text-gray-700"
          >
            Reason for Leaving
          </label>
          <input
            type="text"
            id="reasonForLeaving"
            name="reasonForLeaving"
            value={formData.reasonForLeaving}
            onChange={(e) =>
              setFormData({ ...formData, reasonForLeaving: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Reason for Leaving"
          />
        </div>
        <div>
          <label
            htmlFor="monthlyRent"
            className="block text-sm font-medium text-gray-700"
          >
            Monthly Rent
          </label>
          <input
            type="number"
            id="monthlyRent"
            name="monthlyRent"
            value={formData.monthlyRent}
            onChange={(e) =>
              setFormData({ ...formData, monthlyRent: e.target.value })
            }
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Monthly Rent"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
