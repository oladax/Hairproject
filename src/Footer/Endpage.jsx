import React from 'react'
import america from './t_american-express-card4564-removebg-preview.png'
import union from './Unionpay-removebg-preview.png'
import discovercard from './t_discover-card4683-removebg-preview.png'
import mastercard from './master-card-icon-11657_prev_ui.png'

function Endpage() {
  return (
    <div className="paymentcardcon">
      <p>For your security, all orders are processed in USD via Stripe.</p>
      <div className="paymentcard">
        <img
          src="https://cdna.iconscout.com/img/mastercard.1afc104.svg"
          alt=""
        />
        <img src="https://cdna.iconscout.com/img/visa.4759160.svg" alt="" />
        <img src="https://cdna.iconscout.com/img/amex.a2eb19c.svg" alt="" />
        <img
          src="https://cdna.iconscout.com/img/discover-logo.5f1ae25.svg"
          alt=""
        />
        <img
          src="https://cdna.iconscout.com/img/google-pay.50c14aa.svg"
          alt=""
        />
        <img
          src="https://cdna.iconscout.com/img/apple-pay.253013b.svg"
          alt=""
        />
      </div>
      <div className="copyright">
        <p>&copy; 2024 WigWonderland. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Endpage
