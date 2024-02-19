// ContactForm.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Contact.css";
import "./Contact.css";
import "./Contactresponsive.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Endpage from "../../Footer/Endpage";

function ContactForm() {
  const [text, setText] = useState("Send Message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message, phoneNumber } = formData;
    const errors = {};

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name field
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    // Validate email field
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    // Validate message field
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    // Validate phone number field
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }

    return errors;
  }; // ... (unchanged)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      await sendEmail();
    } else {
      setErrors(formErrors);
    }
  };

  const sendEmail = async () => {
    const url = "http://localhost:3001/send-email";
    setText("Sending");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add the following line to include credentials (if needed)
          credentials: "include",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setText("Send Message");
        setFormData({
          name: "",
          email: "",
          message: "",
          phoneNumber: "",
        });
        setErrors({});
      } else {
        console.error("Failed to send email");
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
    <div className="contact">
      <div className="divs">
        <h2>Contact Us</h2>
        <p>Any question or remarks? Just write us a message</p>
      </div>

      <div className="form-container" id="contact">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Send Us a Message</h3>
          </div>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Taylor Wave"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Taylor@protonmail.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-input">
            <label htmlFor="phoneNumber">Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(123)-456-7890"
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="form-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Start your message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <div className="button-div">
            <button type="submit">{text}</button>
          </div>
        </form>

        <div className="maincontact">
          <div className="contact-container">
            <h3>Location Address</h3>
            <div className="contact-list">
              <li>
                <em className="icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </em>
                <a className="text">Atlanta, GA </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/the_wig_wonderland?igsh=YzljYTk1ODg3Zg=="
                  className="insta"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href="https://www.instagram.com/the_wig_wonderland?igsh=YzljYTk1ODg3Zg=="
                  className="text"
                >
                  Instagram
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Endpage/>
    </div>
  );
}

export default ContactForm;
