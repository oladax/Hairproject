import React, { useEffect } from 'react';
import { checkAuthState } from './firebase'; // Update the path accordingly
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navbar from './Navbars/Navbar';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import NewIn from './NewIn/NewIn';
import Cart from './Cart/Cart';
import Login from './Advert/Login';
import ResetPassword from './Advert/ResetPassword';
import Registration from './Advert/Registration';

function App() {
  useEffect(() => {
    // Check the authentication state when the component mounts
    checkAuthState();
  }, []); // The empty dependency array ensures this effect runs only once

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/NewIn' element={<NewIn />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='*' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/registration' element={<Registration />} />

      </Route>
    )
  );

  return (
    <div className='main-container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
