import React from "react";
import wigwonderland from "../Footer/1-removebg-preview.png";
import Endpage from "./Endpage";


const PrivacyPolicy = () => {
  return (
    <div className="privacyolicy">
      <div className="privacycontent">
        <div className="privacyimg">
          <img src={wigwonderland} />
        </div>

        <h2>Privacy Policy</h2>

        <div className="paradiv">
          <p>
            1. <strong>Information We Collect:</strong> We collect personal
            information such as your name, email address, shipping address, and
            payment information when you place an order on our website.
          </p>
          <p>
            2. <strong>How We Use Your Information:</strong> We use your
            information to process and fulfill your orders, communicate with you
            about your orders, provide customer support, and improve our
            products and services.
          </p>
          <p>
            3. <strong>Data Security:</strong> We implement a variety of
            security measures to protect your personal information, including
            encryption and secure socket layer (SSL) technology.
          </p>
          <p>
            4. <strong>Third-Party Services:</strong> We may use third-party
            services such as payment processors and shipping carriers to fulfill
            your orders. These third parties have their own privacy policies and
            may collect, use, and disclose your information in accordance with
            their policies.
          </p>
          <p>
            5. <strong>Cookies:</strong> We use cookies to enhance your
            experience on our website and analyze website traffic. You can
            choose to disable cookies in your browser settings, but please note
            that some features of our website may not function properly without
            cookies.
          </p>
          <p>
            6. <strong>Data Retention:</strong> We retain your personal
            information for as long as necessary to fulfill the purposes for
            which it was collected, unless otherwise required by law.
          </p>
          <p>
            7. <strong>Your Rights:</strong> You have the right to access,
            correct, or delete your personal information. If you would like to
            exercise any of these rights, please message us from the contact page.
          </p>
          <p>
            8. <strong>Changes to Privacy Policy:</strong> We reserve the right
            to modify or update this Privacy Policy at any time. We will notify
            you of any changes by posting the revised policy on our website.
          </p>
          <p>
            9. <strong>Contact Us:</strong> If you have any questions or
            concerns about our Privacy Policy, please contact us.
          </p>
        </div>
      </div>
      <Endpage/>
    </div>
  );
};

export default PrivacyPolicy;
