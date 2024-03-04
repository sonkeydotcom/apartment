import React, { useState } from "react";

const EmployerInfo = ({ formData, setFormData }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Employer Information</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="employer"
            className="block text-sm font-medium text-gray-700"
          >
            Employer
          </label>
          <input
            type="text"
            placeholder="Employer"
            value={formData.employer}
            onChange={(e) =>
              setFormData({ ...formData, employer: e.target.value })
            }
            name="employer"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="employerPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Employer Phone
          </label>
          <input
            type="text"
            placeholder="Employer Phone"
            value={formData.employerPhone}
            onChange={(e) =>
              setFormData({ ...formData, employerPhone: e.target.value })
            }
            name="employerPhone"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Position
          </label>
          <input
            type="text"
            placeholder="Position"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
            name="position"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="supervisor"
            className="block text-sm font-medium text-gray-700"
          >
            Supervisor
          </label>
          <input
            type="text"
            placeholder="Supervisor"
            value={formData.supervisor}
            onChange={(e) =>
              setFormData({ ...formData, supervisor: e.target.value })
            }
            name="supervisor"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="supervisorPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Supervisor Phone
          </label>
          <input
            type="text"
            placeholder="Supervisor Phone"
            value={formData.supervisorPhone}
            onChange={(e) =>
              setFormData({ ...formData, supervisorPhone: e.target.value })
            }
            name="supervisorPhone"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="annualIncome"
            className="block text-sm font-medium text-gray-700"
          >
            Annual Income
          </label>
          <input
            type="text"
            placeholder="Annual Income"
            value={formData.annualIncome}
            onChange={(e) =>
              setFormData({ ...formData, annualIncome: e.target.value })
            }
            name="annualIncome"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployerInfo;
