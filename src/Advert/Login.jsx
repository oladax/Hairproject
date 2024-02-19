import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPasswordWithEmail,
  signInWithGoogle,
} from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import google from "./google.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Loading state for Sign In button
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  // Loading state for Sign In with Google button
  const [loadingSignInWithGoogle, setLoadingSignInWithGoogle] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    setError(null);
    setShowError(false);

    if (!email || !password) {
      setShowError(true);
      return;
    }

    try {
      // Set loading state to true for Sign In button
      setLoadingSignIn(true);

      const isVerified = await signInWithEmailAndPasswordWithEmail(
        email,
        password
      );

      if (isVerified) {
        const errorMessage = "Invalid email or password. Please try again.";
        setError(errorMessage);
      } else {
        navigate("/");
      }
    } catch (error) {
      const errorMessage =
        error.message || "An error occurred while signing in.";
      if (errorMessage === "Firebase: Error (auth/invalid-credential).") {
       setError("Invalid email or password. Please try again.");
      }
    } finally {
      // Reset loading state for Sign In button
      setLoadingSignIn(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    setError(null);
    setShowError(false);

    try {
      // Set loading state to true for Sign In with Google button
      setLoadingSignInWithGoogle(true);

      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setError(`Error signing in with Google.`);
    } finally {
      // Reset loading state for Sign In with Google button
      setLoadingSignInWithGoogle(false);
    }
  };

  return (
    <div className="login">
      <div className="login-con">
        <div className="login-details">
          <h2>LOGIN</h2>
          <p>If you've created an account with us, please enter.</p>
          <p className="error">{error}</p>
          <div className="input-div">
            <div className="email-container">
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                style={{ border: showError && !email ? "2px solid red" : "" }}
              />
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            {showError && !email && (
              <span className="validation-error">Email is required.</span>
            )}

            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
                style={{
                  border: showError && !password ? "2px solid red" : "",
                }}
              />
              <FontAwesomeIcon
                className="fakey"
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
              />
            </div>
            {showError && !password && (
              <span className="password-error"> Password is required.</span>
            )}
          </div>

          <div className="resetpasswordcon">
            <p>
              <Link to="/reset-password">Forgot Password?</Link>
            </p>
          </div>

          <div className="btn-con">
            <button onClick={handleSignIn} disabled={loadingSignIn}>
              {loadingSignIn ? "Signing In..." : "Sign In"}
            </button>
          </div>

          <div className="registercontainer">
            <p>
              Don't have an account?
              <Link to="/registration">Register here</Link>
            </p>
          </div>

          <p className="OR">Or</p>

          <div className="google-div">
            <button
              onClick={handleSignInWithGoogle}
              disabled={loadingSignInWithGoogle}
            >
              {loadingSignInWithGoogle
                ? "Signing In..."
                : "Sign In with Google"}
            </button>
            <img src={google} alt="google" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
