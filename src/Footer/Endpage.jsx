import React from 'react'
import Quicklinks from './Quicklinks';


function Endpage() {
  return (
    <div className="paymentcardcon">
      <p>For your security, all orders are processed in USD via Stripe.</p>
      <div className="paymentcard">
        <img
          src="https://cdna.iconscout.com/img/mastercard.1afc104.svg"
          alt=""
        />
        <img src="https://cdna.iconscout.com/img/amex.a2eb19c.svg" alt="" />
        <img
          src="https://cdna.iconscout.com/img/discover-logo.5f1ae25.svg"
          alt=""
        />
        <img src="https://cdna.iconscout.com/img/visa.4759160.svg" alt="" />

        <img
          src="https://cdna.iconscout.com/img/google-pay.50c14aa.svg"
          alt=""
        />
        <img
          src="https://cdna.iconscout.com/img/apple-pay.253013b.svg"
          alt=""
        />
      </div>
      <Quicklinks />

      <div className="copyright">
        <p>&copy; 2024 Wigwonderland. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Endpage
