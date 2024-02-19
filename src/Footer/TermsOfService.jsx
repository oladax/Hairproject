import React from "react";
import wigwonderland from "../Footer/1-removebg-preview.png";
import Endpage from "./Endpage";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="aboutus">
      <div className="aboutcontent">
        <div className="aboutimg">
          <img src={wigwonderland} />
        </div>
        <div className="paradiv">
          <h2>Terms of Service</h2>
          <p>
            Welcome to Wigwonderland! These Terms of Service govern your use of
            our website and services. By accessing or using our website, you
            agree to be bound by these terms. Please read them carefully before
            using our website.
          </p>
          <p>
            1. <strong>Acceptance of Terms:</strong> By using our website, you
            agree to comply with and be bound by these Terms of Service. If you
            do not agree to these terms, you may not use our website.
          </p>
          <p>
            2. <strong>Use of Website:</strong> You may use our website for
            lawful purposes only. You may not use our website in any way that
            violates applicable laws or regulations.
          </p>
          <p>
            3. <strong>Intellectual Property:</strong> All content on our
            website, including but not limited to text, graphics, logos, images,
            and software, is the property of Wigwonderland and is protected by
            copyright and other intellectual property laws.
          </p>
          <p>
            4. <strong>Product Information:</strong> We strive to provide
            accurate and up-to-date information about our products on our
            website. However, we do not guarantee the accuracy, completeness, or
            reliability of any product information.
          </p>
          <p>
            5. <strong>Pricing and Payment:</strong> Prices for our products are
            subject to change without notice. We reserve the right to refuse or
            cancel any orders placed for products listed at incorrect prices.
            Payment for orders must be made in full at the time of purchase.
          </p>
          <p>
            6. <strong>Shipping and Delivery:</strong> We will make every effort
            to ship orders in a timely manner. However, we do not guarantee
            delivery dates and are not responsible for delays caused by shipping
            carriers or other factors beyond our control.
          </p>
          <p>
            7. <strong>Returns and Refunds:</strong> Please refer to our Returns
            and Refunds Policy for information about returning products and
            receiving refunds.
          </p>
          <p>
            8. <strong>Privacy Policy:</strong> Your privacy is important to us.
            Please refer to our Privacy Policy for information about how we
            collect, use, and disclose your personal information.
          </p>
          <p>
            9. <strong>Limitation of Liability:</strong> In no event shall
            Wigwonderland be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            of our website or products.
          </p>
          <p>
            10. <strong>Governing Law:</strong> These Terms of Service shall be
            governed by and construed in accordance with the laws of [Your
            Country/State], without regard to its conflict of law provisions.
          </p>
          <p>
            11. <strong>Changes to Terms:</strong> We reserve the right to
            modify or update these Terms of Service at any time. Please check
            this page periodically for changes. Your continued use of our
            website after any modifications indicates your acceptance of the
            updated terms.
          </p>
          <p>
            If you have any questions about these Terms of Service, please
            <Link to="/contact">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
      <Endpage />
    </div>
  );
};

export default TermsOfService;
