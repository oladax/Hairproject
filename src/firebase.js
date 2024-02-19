// firebase.js

// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail 
} from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFJY_3Uok0lJCH8zX1vi0BqXfSIrhIU24",
  authDomain: "wigwonderland-bc6f0.firebaseapp.com",
  projectId: "wigwonderland-bc6f0",
  storageBucket: "wigwonderland-bc6f0.appspot.com",
  messagingSenderId: "657178258299",
  appId: "1:657178258299:web:bd3babffc1b9f7311febde",
  measurementId: "G-9NKET1239L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

const checkIfUserExists = async (email) => {
  try {
    const usersRef = collection(db, "users"); // Replace "users" with the name of your users collection

    // Create a query to check if a user with the given email exists
    const q = query(usersRef, where("email", "==", email));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // If there are any documents in the query snapshot, a user with the given email exists
    return querySnapshot.size > 0;
  } catch (error) {
    console.error("Error checking if user exists:", error.message);
    throw error;
  }
};

export { checkIfUserExists };
let currentUser = null; // Add this variable to store the current signed-in user




// Check if the user's email is verified
const checkIfEmailVerified = async (email) => {
  const user = auth.currentUser;
  if (user) {
    await user.reload();
    return user.email === email && user.emailVerified;
  } else {
    return false;
  }
};

// Sign up with email and password
const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    currentUser = userCredential.user; // Store the signed-in user
    console.log("User signed up:", currentUser);
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

// Sign in with email and password
const signInWithEmailAndPasswordWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    currentUser = userCredential.user; // Store the signed-in user
    console.log("User signed in:", currentUser);
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

// Google Sign In
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    currentUser = result.user; // Store the signed-in user
    console.log("User signed in with Google:", currentUser);
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};

// Reset password
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error("Error resetting password:", error.message);
    throw error;
  }
};

// Sign out
const signOutUser = async () => {
  try {
    await signOut(auth);
    currentUser = null; // Clear the current user on sign out
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

// Check if the user is authenticated
const checkAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser = user; // Update the current user when the auth state changes
      console.log("User is signed in:", user);
    } else {
      currentUser = null; // Clear the current user when the user signs out
      console.log("User is signed out");
    }
  });
};

// Expose the user information for other components to use
const getCurrentUser = () => {
  return currentUser;
};

export {
  auth,
  signUpWithEmailAndPassword,
  signInWithEmailAndPasswordWithEmail,
  signInWithGoogle,
  signOutUser,
  checkAuthState,
  resetPassword,
  checkIfEmailVerified,
  getCurrentUser,

};
