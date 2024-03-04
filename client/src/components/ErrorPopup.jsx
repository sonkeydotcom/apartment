import React from "react";

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-red-600">Error</h3>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 10l4.147-4.146a.5.5 0 0 0-.708-.708L11.586 9.293l-4.147-4.147a.5.5 0 0 0-.708.708L10.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L11.586 10.707l4.147 4.147a.5.5 0 0 0 .708-.708L12.293 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default ErrorPopup;
