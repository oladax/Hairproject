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
import Contact from './Home/Contact/ContactForm'
import AboutUs from './Footer/AboutUs';
import PrivacyPolicy from './Footer/PrivacyPolicy';
import CustomerServicePrivacy from './Footer/CustomerServicePrivacy';
import TermsOfService from './Footer/TermsOfService';
import PaymentMethodsPolicy from './Footer/PaymentMethodsPolicy';
import ShippingInformation from './Footer/ShippingInformation';
import ReturnsAndRefundsPolicy from './Footer/ReturnsAndRefundsPolicy';
import FAQ from './Footer/FAQ';

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
        <Route path='/Login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/customer' element={<CustomerServicePrivacy />} />
        <Route path='/terms' element={<TermsOfService/>}/>
        <Route path='/paymentpolicy' element={<PaymentMethodsPolicy />} />
        <Route path='/shippinginformation' element={<ShippingInformation />} />
        <Route path='/returns/refunds' element={<ReturnsAndRefundsPolicy/>}/>
        <Route path='/faq' element={<FAQ/>}/>
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
