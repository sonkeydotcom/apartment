import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import EmployerInfo from "./components/EmployerInfo";
import Questions from "./components/Questions";
import Payment from "./Payment";
import axios from "axios";
import ErrorPopup from "./components/ErrorPopup";
import Flutter from "./components/Flutter";
import GetStarted from "./components/GetStarted";

const Application = () => {
  const { id } = useParams();
  const [page, setPage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); //
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    landlord: "",
    landlordPhone: "",
    reasonForLeaving: "",
    monthlyRent: "",
    employer: "",
    employerPhone: "",
    position: "",
    supervisor: "",
    supervisorPhone: "",
    annualIncome: "",
    crimeConviction: "",
    bankruptcy: "",
    evicted: "",
    pets: "",
    smoker: "",
    keysAddress: "",
  });
  const [paymentMethod, setPaymentMethod] = useState(""); // State to manage the selected payment method

  const handleChange = (e) => {
    setPaymentMethod(e.target.value); // Update the selected payment method when the dropdown value changes
  };

  const FormTitles = [
    "Get Started",
    "Personal Information",
    "Contact Information",
    "Employer Information",
    "Questions",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <GetStarted />;
    }
    if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <AddressInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <EmployerInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Questions formData={formData} setFormData={setFormData} />;
    }
  };

  {
    /*const handleNextClick = async () => {
    if (page === FormTitles.length - 1) {
      setIsSubmitting(true); // Set isSubmitting to true when starting the submission
      try {
        const response = await axios.post(
          "http://localhost:3000/api/application/65e29119bba78c3c6412b68b",
          {
            ...formData,
            name: `${formData.firstName} ${formData.lastName}`,
          }
        );
        console.log(response);
        setShowPopup(true);
      } catch (error) {
        console.error(error);
        setShowError(true); // Set showError state to true to display the error popup
      } finally {
        setIsSubmitting(false); // Set isSubmitting back to false after submission completes (whether successful or not)
      }
    } else {
      setPage(page + 1);
    }
  }; */
  }

  const handleNextClick = () => {
    // Define required fields for each page
    const requiredFields = [
      [], // For Get Started page
      ["firstName", "lastName"], // For Personal Information page
      ["address", "city", "state", "zip"], // For Address Information page
      [], // For Employer Information page
      ["evicted", "pets", "smoker", "bankruptcy"], // For Questions page, assuming no required fields
    ];

    // Get the required fields for the current page
    const currentPageRequiredFields = requiredFields[page];

    // Check if all required fields for the current page are filled
    const allFieldsFilled = currentPageRequiredFields.every(
      (field) => formData[field] !== ""
    );

    if (allFieldsFilled) {
      if (page === FormTitles.length - 1) {
        // Submit the form

        submitApplication();
        successMessage();
      } else {
        setPage(page + 1);
      }
    } else {
      // Show a notification for the error
      alert("Please fill in all required fields");
    }
  };

  const submitApplication = async () => {
    setIsSubmitting(true); // Set isSubmitting to true when starting the submission
    try {
      const response = await axios.post(
        "http://localhost:3000/api/application/65e29119bba78c3c6412b68b",
        {
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`,
        }
      );
      console.log(response);
      setShowPopup(true);
    } catch (error) {
      console.error(error);
      setShowError(true); // Set showError state to true to display the error popup
    } finally {
      setIsSubmitting(false); // Set isSubmitting back to false after submission completes (whether successful or not)
    }
  };

  const successMessage = async () => {
    const response = await axios.post("http://localhost:3000/api/mail");
    console.log(response);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    // You can reset any form fields or perform other actions upon closing the popup
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 text-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold">Rental Application</h1>
      </header>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">{FormTitles[page]}</div>
            <div className="text-sm text-gray-600">
              Step {page + 1} of {FormTitles.length}
            </div>
          </div>
          {pageDisplay()}
          <div className="mt-8 flex justify-between">
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {isSubmitting
                ? "Submitting..."
                : page === FormTitles.length - 1
                ? "Submit"
                : "Next"}
            </button>
          </div>
        </div>
      </main>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            {/* Popup content */}

            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
              <strong className="font-bold mb-2">Congratulations!</strong>
              <p className="mb-4">
                Your application has been submitted successfully.
              </p>
              <Link
                to={`/scheduleviewing/${id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block"
              >
                Schedule Viewing
              </Link>
            </div>

            {/* <button
              onClick={handlePopupClose}
              className="mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Close
      </button> */}
          </div>
        </div>
      )}

      {showError && (
        <ErrorPopup
          message={error ? error.message : "An unknown error occurred"}
          onClose={() => setShowError(false)}
        />
      )}

      <footer className="bg-slate-800 text-gray-100 py-4 text-center">
        <p>&copy; 2024 Rental Application</p>
      </footer>
    </div>
  );
};

export default Application;
