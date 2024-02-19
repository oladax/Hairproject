import React from "react";
import wigwonderland from "../Footer/1-removebg-preview.png";
import Endpage from "./Endpage";

const FAQ = () => {
  return (
    <div className="aboutus">
      <div className="aboutcontent">
        <div className="aboutimg">
          <img src={wigwonderland} />
        </div>
        <h2>Frequently Asked Questions (FAQ)</h2>

        <div className="paradiv">
          <h3>1. How do I choose the right hair product for me?</h3>
          <p>
            Choosing the right hair product depends on factors such as your hair
            type, desired style, and personal preferences. We recommend browsing
            our product descriptions and customer reviews for guidance. If you
            need further assistance, feel free to contact our customer service
            team.
          </p>

          <h3>2. Can I dye or bleach my hair extensions?</h3>
          <p>
            Yes, most of our hair extensions can be dyed or bleached. However,
            we recommend consulting with a professional stylist to ensure the
            best results and minimize damage to the hair.
          </p>

          <h3>3. How do I care for my hair extensions?</h3>
          <p>
            Proper care and maintenance are essential for prolonging the
            lifespan of your hair extensions. We recommend using sulfate-free
            shampoo and conditioner, avoiding excessive heat styling, and
            storing your extensions properly when not in use. For more detailed
            care instructions, please refer to our Hair Care Guide.
          </p>

          <h3>4. What is the difference between synthetic and human hair?</h3>
          <p>
            Synthetic hair is made from synthetic fibers and is typically more
            affordable but may have a less natural appearance and limited
            styling options. Human hair is sourced from real human donors and
            offers a more natural look and feel, as well as greater versatility
            in styling.
          </p>

          <h3>5. Do you offer wholesale or bulk discounts?</h3>
          <p>
            Yes, we offer wholesale pricing and bulk discounts for larger
            orders. Please contact our wholesale department for more information
            and pricing details.
          </p>

          <h3>6. How long does shipping take?</h3>
          <p>
            Shipping times vary depending on your location and the shipping
            method selected at checkout. Standard shipping typically takes
            [number] business days, while expedited shipping may arrive sooner.
            For more information, please refer to our Shipping Policy.
          </p>

          <h3>7. What is your return policy?</h3>
          <p>
            We accept returns for eligible items within [number] days of
            delivery. To initiate a return, please contact our customer service
            team for assistance. For more details, please refer to our Returns
            and Refunds Policy.
          </p>

          <h3>8. How can I track my order?</h3>
          <p>
            Once your order has been shipped, you will receive a tracking number
            via email. You can use this tracking number to track the status of
            your shipment on our website or the carrier's website.
          </p>

          <h3>9. Do you offer international shipping?</h3>
          <p>
            Yes, we offer international shipping to select countries. Shipping
            rates and delivery times vary depending on your location. Please
            contact our customer service team for more information about
            international shipping options.
          </p>

          <h3>10. What if my question isn't answered here?</h3>
          <p>
            If you have a question that isn't addressed in our FAQ, please don't
            hesitate to contact our customer service team for assistance. We're
            here to help!
          </p>
        </div>
      </div>
      <Endpage/>
    </div>
  );
};

export default FAQ;
