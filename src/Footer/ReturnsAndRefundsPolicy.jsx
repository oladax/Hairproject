import React from "react";
import wigwonderland from "../Footer/1-removebg-preview.png";
import Endpage from "./Endpage";

const ReturnsAndRefundsPolicy = () => {
  return (
    <div className="privacyolicy">
      <div className="privacycontent">
        <div className="privacyimg">
          <img src={wigwonderland} />
        </div>

        <h2>Returns and Refunds Policy</h2>
        <div className="paradiv">
          <p>
            1. <strong>Return Eligibility:</strong> We accept returns for
            eligible items within [2/3] days of delivery. To be eligible for a
            return, the item must be unused, in its original condition, and in
            the original packaging.
          </p>
          <p>
            2. <strong>Non-Returnable Items:</strong> Certain items are not
            eligible for return, including:
          </p>
          <ul>
            <li>Items that have been used or damaged after delivery.</li>
            <li>Custom-made or personalized items.</li>
            <li>Items marked as final sale or clearance.</li>
          </ul>
          <p>
            3. <strong>Return Process:</strong> To initiate a return, please
            contact our customer service team to request a return authorization.
            We will provide you with instructions on how to return the item and
            a return shipping label, if applicable.
          </p>
          <p>
            4. <strong>Refund Processing:</strong> Once we receive the returned
            item, we will inspect it and notify you of the status of your
            refund. If the return is approved, we will process a refund to your
            original method of payment within [2/3] days.
          </p>
          <p>
            5. <strong>Return Shipping Costs:</strong> Customers are responsible
            for return shipping costs, unless the return is due to an error on
            our part (e.g., incorrect item shipped, defective item). In such
            cases, we will provide a prepaid return shipping label.
          </p>
          <p>
            6. <strong>Exchanges:</strong> We do not offer exchanges at this
            time. If you would like to exchange an item, please return the
            original item for a refund and place a new order for the desired
            item.
          </p>
          <p>
            7. <strong>Damaged or Defective Items:</strong> If you receive a
            damaged or defective item, please contact us immediately to arrange
            for a replacement or refund.
          </p>
          <p>
            8. <strong>Cancellation Policy:</strong> Orders may be cancelled
            within [number] hours of placement, provided they have not yet been
            shipped. Once an order has been shipped, it cannot be cancelled, but
            you may still initiate a return according to our Returns and Refunds
            Policy.
          </p>
          <p>
            9. <strong>Contact Us:</strong> If you have any questions or
            concerns about our Returns and Refunds Policy, please contact us at
            [email address/phone number].
          </p>
        </div>
      </div>
      <Endpage/>
    </div>
  );
};

export default ReturnsAndRefundsPolicy;
