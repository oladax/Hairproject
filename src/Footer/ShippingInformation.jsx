import React from "react";
import wigwonderland from "../Footer/1-removebg-preview.png";
import Endpage from "./Endpage";

const ShippingInformation = () => {
  return (
    <div className="aboutus">
      <div className="aboutcontent">
        <div className="aboutimg">
          <img src={wigwonderland} />
        </div>
        <h2>Shipping Information</h2>
        <div className="paradiv">
          <p>
            At Wigwonderland, we strive to provide you with convenient and
            affordable shipping options to ensure that your order reaches you in
            a timely manner. Here's what you need to know about our shipping
            policies:
          </p>

          <h3>Domestic Shipping (United States)</h3>
          <p>
            Enjoy free shipping on all orders over $50.00 within the United
            States! For orders under $50.00, we offer a flat rate shipping fee
            of $7.99. We use reliable shipping carriers to deliver your packages
            securely and efficiently. Once your order is processed, you can
            expect your package to arrive within [number] business days.
          </p>

          <h3>International Shipping</h3>
          <p>
            We also offer international shipping to select countries at a flat
            rate of $14.99. Whether you're located in Europe, Asia, or elsewhere
            around the globe, we're committed to delivering your order to you
            wherever you are. Please note that international shipping times may
            vary depending on your location and local customs clearance
            procedures.
          </p>

          <h3>Package Care</h3>
          <p>
            Rest assured that all of our wigs are carefully packaged to ensure
            they arrive in perfect condition. We take great care to protect your
            order during transit and minimize the risk of damage. If you receive
            a damaged or defective item, please contact our customer service
            team immediately for assistance.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions or concerns about our shipping methods,
            delivery times, or anything else related to shipping, please feel
            free to contact us. Our friendly customer service team is here to
            help and can provide you with personalized assistance to ensure a
            smooth shopping experience.
          </p>
        </div>
      </div>
      <Endpage/>
    </div>
  );
};

export default ShippingInformation;
