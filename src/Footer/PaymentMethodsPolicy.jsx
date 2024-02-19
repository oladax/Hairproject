import React from "react";
import wigwonderland from "../Footer/1-removebg-preview.png";
import Endpage from "./Endpage";

const PaymentMethodsPolicy = () => {
  return (
    <div className="privacyolicy">
      <div className="privacycontent">
        <div className="privacyimg">
          <img src={wigwonderland} />
        </div>

        <h2>Payment Methods Policy</h2>

        <div className="paradiv">
          <p>
            1. <strong>Accepted Payment Methods:</strong> We accept the
            following payment methods for purchases made on our website:
          </p>
          <ul>
            <li>Credit cards (Visa, Mastercard, American Express, Discover)</li>
            <li>Debit cards</li>
            <li>PayPal</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
          </ul>
          <p>
            2. <strong>Payment Security:</strong> We take the security of your
            payment information seriously and use industry-standard encryption
            and security measures to protect your personal and financial data.
          </p>
          <p>
            3. <strong>Payment Processing:</strong> Payment for orders is
            processed at the time of purchase. Your payment method will be
            charged once your order is confirmed and ready for shipment.
          </p>
          <p>
            4. <strong>Billing Information:</strong> Please ensure that the
            billing information provided at checkout matches the information on
            file with your payment method issuer. Incorrect billing information
            may result in delays or cancellation of your order.
          </p>
          <p>
            5. <strong>Currency:</strong> All prices listed on our website are
            in [currency]. If you are using a payment method denominated in a
            different currency, your payment provider may apply exchange rates
            and conversion fees.
          </p>
          <p>
            6. <strong>Authorization Holds:</strong> Some payment methods, such
            as credit and debit cards, may be subject to pre-authorization holds
            to verify the availability of funds. These holds will be released
            once your order is processed and shipped.
          </p>
          <p>
            7. <strong>Payment Disputes:</strong> If you believe that you have
            been charged incorrectly or have a dispute regarding a payment,
            please contact our customer service team at [email address/phone
            number] for assistance.
          </p>
          <p>
            8. <strong>Fraud Prevention:</strong> We reserve the right to refuse
            or cancel orders that we suspect may be fraudulent or unauthorized.
            If your order is cancelled due to suspected fraud, you will be
            notified and refunded accordingly.
          </p>
          <p>
            9. <strong>Payment Confirmation:</strong> You will receive a
            confirmation email with details of your order and payment once your
            payment has been processed successfully. Please keep this email for
            your records.
          </p>
          <p>
            10. <strong>Contact Us:</strong> If you have any questions or
            concerns about our Payment Methods Policy, please contact us at
            [email address/phone number].
          </p>
        </div>
      </div>
      <Endpage/>
    </div>
  );
};

export default PaymentMethodsPolicy;
