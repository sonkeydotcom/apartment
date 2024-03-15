import React, { useState } from "react";

const Final = ({ formData, setFormData }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  const handleAcknowledgement = () => {
    setAcknowledged(!acknowledged);
  };

  const handleSubmit = () => {
    // Logic to submit data, such as payment method and acknowledgment
    // This can be an API call or any other action you want to perform
    // You can access paymentMethod and acknowledged state variables here
  };

  return (
    <div className="container mx-auto">
      {/* Payment Selection */}
      <div className="my-4">
        <label htmlFor="payment" className="text-xl font-semibold mb-2">
          Select Payment Method:
        </label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="credit_card"
              checked={formData.paymentMethod === "credit_card"}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            />
            <span className="ml-2">Credit Card</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              value="paypal"
              checked={formData.paymentMethod === "paypal"}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            />
            <span className="ml-2">PayPal</span>
          </label>
        </div>
      </div>

      {/* Acknowledgment Pledge */}
      <div className="my-4">
        <label htmlFor="acknowledged" className="inline-flex items-center">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={handleAcknowledgement}
          />
          <span className="ml-2">
            I acknowledge that all information provided is correct.
          </span>
        </label>
      </div>

      {/* Submit Button */}
    </div>
  );
};

export default Final;
