import React, { useState } from "react";
import { resetPassword, checkIfEmailVerified } from "../firebase"; // Update the path accordingly
import { Link, useNavigate } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Loading state for Reset Password button
  const [loadingResetPassword, setLoadingResetPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleResetPassword = async () => {
    setError(null);
    setResetSuccess(false);
    setShowError(false);

    if (!email) {
      setShowError(true);
      return;
    }

    try {
      setLoadingResetPassword(true);

      const isUserExists = await checkIfEmailVerified(email);
      console.log("Is user exists:", isUserExists);

      if (isUserExists) {
        
 setResetSuccess(false);
 setError("User with this email does not exist.");      } else {
       
        await resetPassword(email);
        setResetSuccess(true);
      }
    } catch (error) {
      setResetSuccess(false);
      setError(`Invalid email address`);
    } finally {
      setLoadingResetPassword(false);
    }
  }

  return (
    <div className="login">
      <div className="login-con">
        <div className="login-details">
          <h2>Reset Password</h2>
          <div className="input-div">
            <div className="email-container">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                style={{ border: showError && !email ? "2px solid red" : "" }}
              />
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            {showError && !email && (
              <p className="validation-error">Email is required.</p>
            )}
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="btn-con">
            <button
              onClick={handleResetPassword}
              disabled={loadingResetPassword}
            >
              {loadingResetPassword
                ? "Resetting Password..."
                : "Reset Password"}
            </button>
          </div>
          {resetSuccess && (
            <p className="success-message">
              Password reset email sent. Check your inbox.
            </p>
          )}
          <div className="registercontainers">
            <p>
              Remember your password? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
