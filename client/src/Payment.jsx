import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const PaymentPage = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [resShow, setResShow] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle payment processing
    // For simplicity, just set paymentSuccess to true
    setPaymentSuccess(true);
  };

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      {!paymentSuccess ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 mr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="expiryDate"
              >
                Expiry Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiryDate"
                type="text"
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv"
                type="text"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleChange}
                placeholder="CVV"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="text"
              name="amount"
              value={paymentInfo.amount}
              onChange={handleChange}
              placeholder="Amount"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Pay Now
            </button>
          </div>
        </form>
      ) : (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Payment failed!</strong>
          <span className="block sm:inline">
            There was an error processing your payment. Please try again.
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            type="button"
            onClick={() => {
              // Add functionality to handle retrying payment
              console.log("Retry payment");
            }}
          >
            Retry Payment
          </button>
        </div>
      )}

      {/* Button for choosing viewing date */}
    </main>
  );
};

export default PaymentPage;
