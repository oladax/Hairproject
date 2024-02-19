import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingFee, setShippingFee] = useState(5); // Adjust based on your logic
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { token } = await stripe.createToken(cardElement);

      // Send customer and payment details to your server
      await axios.post("/api/checkout", {
        token: token.id,
        customer: { name, address, phoneNumber },
        shippingFee,
      });

      // Payment successful - redirect or show success message
      console.log("Payment successful!");
    } catch (error) {
      console.error(error.message);
      setPaymentError(
        "Payment failed. Please check your information and try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />

      <label>Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        
      />

      <label>Phone Number:</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        
      />

      <label>Shipping Fee: ${shippingFee}</label>

      <label>Card Details:</label>
      <CardElement />

      {paymentError && <div style={{ color: "red" }}>{paymentError}</div>}

      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
