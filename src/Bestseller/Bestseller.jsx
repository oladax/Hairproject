import React from "react";
import Categories from "./Products";
import "./Bestseller.css"; 


const Bestseller = () => {
  
  const bestsellers = Categories

  return (
    <div className="bestseller">
      <h2>Bestsellers</h2>
      <div className="bestsellers-container">
        {bestsellers.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <span className="price-container">
                <p>${product.price}</p>
                <p>${product.old_price}</p>
              </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
