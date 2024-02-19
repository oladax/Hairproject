import React from "react";
import wigwonderland from "../Footer/1-removebg-preview.png";
import Endpage from "./Endpage";

const CustomerServicePrivacy = () => {
    return (
      <div className="Customerus">
        <div className="Customercontent">
          <div className="customerimg">
            <img src={wigwonderland} />
          </div>
          <h2>Customer Service & Privacy Statement</h2>

          <div className="paradiv">
            <h3>Customer Service</h3>
            <p>
              At Wigwonderland, we are dedicated to providing exceptional
              customer service to ensure that your shopping experience is
              enjoyable and hassle-free. Whether you have questions about our
              products, need assistance with placing an order, or require
              support after purchase, our knowledgeable and friendly customer
              service team is here to help.
            </p>

            <h3>Privacy Statement</h3>
            <p>
              At Wigwonderland, we take your privacy and safety seriously. We
              understand the importance of protecting your personal information
              and maintaining your trust. Here's how we safeguard your privacy:
            </p>

            <ul>
              <li>
                <strong>Secure Payment Processing:</strong> We use third-party
                banking services to securely process and verify all payment
                transactions. Your payment information is encrypted and
                protected using industry-standard security measures to prevent
                unauthorized access.
              </li>
              <li>
                <strong>Strict Data Confidentiality:</strong> We never share
                your personal information, including your name, address, email,
                or payment details, with any third parties for marketing or
                other purposes. Your information is kept strictly confidential
                and used only for order processing and communication purposes.
              </li>
              <li>
                <strong>Compliance with Privacy Laws:</strong> We comply with
                all applicable privacy laws and regulations to ensure that your
                personal information is collected, processed, and stored in
                accordance with legal requirements and industry best practices.
              </li>
            </ul>

            <p>
              Your trust is important to us, and we are committed to upholding
              the highest standards of integrity and transparency in how we
              handle your personal information. If you have any concerns about
              your privacy or data security, please don't hesitate to contact
              us. We value your feedback and are here to address any questions
              or concerns you may have.
            </p>
          </div>
        </div>
        <Endpage/>
      </div>
    );
};

export default CustomerServicePrivacy;
