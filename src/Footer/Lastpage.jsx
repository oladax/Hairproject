import React, { useState } from "react";
import "./footer.css";

function Lastpage() {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [text, setText] = useState("Subscribe");

  const handleSubscribe = async () => {
    if (!email || !isValidEmail(email)) {
      setInvalid(true);
      alert("Please enter a valid email address");
    } else {
      setInvalid(false);
            setText("Subscribing");

      // Add your logic to send the email
      await sendEmail();
      alert("Thank you for signing up for our newsletter!");
      setEmail('')
     setText("Subscribe");

    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setInvalid(false);
  };

  const isValidEmail = (value) => {
    // Add your email validation logic here
    // For simplicity, I'm using a basic regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const sendEmail = async () => {
    const url = "http://localhost:3002/send-email";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add the following line to include credentials (if needed)
          credentials: "include",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setText('Subscribing')
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
    <div className="footer">
      <div className="subscribe-con">
        <div className="container">
          <em>Subscribe</em>
          <div>
            <h2>Subscribe To Our Newsletter</h2>
            <p>
              Sign up for our newsletter and get the best offers in your inbox
            </p>
          </div>
        </div>
      </div>
      <div className="email-subscribe">
        <input
          className={`email-input ${invalid ? "invalid" : ""}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <input
          className="button-input"
          type="button"
          value={text}
          onClick={handleSubscribe}
        />
      </div>
    </div>
  );
}

export default Lastpage;
