import React from "react";

const Questions = ({ formData, setFormData }) => {
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Questions</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="crimeConviction"
              className="block text-sm font-medium text-gray-700"
            >
              Have you ever been convicted of a crime
            </label>
            <input
              type="radio"
              id="crimeConvictionYes"
              name="crimeConviction"
              value="yes"
              checked={formData.crimeConviction === "yes"}
              onChange={(e) =>
                setFormData({ ...formData, crimeConviction: e.target.value })
              }
              className="mr-2"
            />
            <label htmlFor="crimeConvictionYes">Yes</label>
            <input
              type="radio"
              id="crimeConvictionNo"
              name="crimeConviction"
              value="no"
              checked={formData.crimeConviction === "no"}
              onChange={(e) =>
                setFormData({ ...formData, crimeConviction: e.target.value })
              }
              className="ml-4"
            />
            <label htmlFor="crimeConvictionNo">No</label>
          </div>

          <div>
            <label
              htmlFor="bankruptcy"
              className="block text-sm font-medium text-gray-700"
            >
              Have you ever filed for bankruptcy
            </label>
            <input
              type="radio"
              id="bankruptcyYes"
              name="bankruptcy"
              value="yes"
              checked={formData.bankruptcy === "yes"}
              onChange={(e) =>
                setFormData({ ...formData, bankruptcy: e.target.value })
              }
              className="mr-2"
            />
            <label htmlFor="bankruptcyYes">Yes</label>
            <input
              type="radio"
              id="bankruptcyNo"
              name="bankruptcy"
              value="no"
              checked={formData.bankruptcy === "no"}
              onChange={(e) =>
                setFormData({ ...formData, bankruptcy: e.target.value })
              }
              className="ml-4"
            />
            <label htmlFor="bankruptcyNo">No</label>
          </div>

          <div>
            <label
              htmlFor="evicted"
              className="block text-sm font-medium text-gray-700"
            >
              Have you ever been evicted
            </label>
            <input
              type="radio"
              id="evictedYes"
              name="evicted"
              value="yes"
              checked={formData.evicted === "yes"}
              onChange={(e) =>
                setFormData({ ...formData, evicted: e.target.value })
              }
              className="mr-2"
            />
            <label htmlFor="evictedYes">Yes</label>
            <input
              type="radio"
              id="evictedNo"
              name="evicted"
              value="no"
              checked={formData.evicted === "no"}
              onChange={(e) =>
                setFormData({ ...formData, evicted: e.target.value })
              }
              className="ml-4"
            />
            <label htmlFor="evictedNo">No</label>
          </div>

          <div>
            <label
              htmlFor="smoker"
              className="block text-sm font-medium text-gray-700"
            >
              Are you a smoker
            </label>
            <input
              type="radio"
              id="smokerYes"
              name="smoker"
              value="yes"
              checked={formData.smoker === "yes"}
              onChange={(e) =>
                setFormData({ ...formData, smoker: e.target.value })
              }
              className="mr-2"
            />
            <label htmlFor="smokerYes">Yes</label>
            <input
              type="radio"
              id="smokerNo"
              name="smoker"
              value="no"
              checked={formData.smoker === "no"}
              onChange={(e) =>
                setFormData({ ...formData, smoker: e.target.value })
              }
              className="ml-4"
            />
            <label htmlFor="smokerNo">No</label>
          </div>

          <div>
            <label
              htmlFor="pets"
              className="block text-sm font-medium text-gray-700"
            >
              Do you have pets
            </label>
            <input
              type="radio"
              id="petsYes"
              name="pets"
              value="yes"
              checked={formData.pets === "yes"}
              onChange={(e) =>
                setFormData({ ...formData, pets: e.target.value })
              }
              className="mr-2"
            />
            <label htmlFor="petsYes">Yes</label>
            <input
              type="radio"
              id="petsNo"
              name="pets"
              value="no"
              checked={formData.pets === "no"}
              onChange={(e) =>
                setFormData({ ...formData, pets: e.target.value })
              }
              className="ml-4"
            />
            <label htmlFor="petsNo">No</label>
          </div>

          <div>
            <label
              htmlFor="keysAddress"
              className="block text-sm font-medium text-gray-700"
            >
              To which address should the keys be sent if approved
            </label>
            <input
              type="text"
              id="keysAddress"
              name="keysAddress"
              value={formData.keysAddress}
              onChange={(e) =>
                setFormData({ ...formData, keysAddress: e.target.value })
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
