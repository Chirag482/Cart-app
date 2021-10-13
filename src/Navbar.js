import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="label">Cart</div>
      <div className="cart-image-count">
        <i className="fas fa-shopping-cart"></i>
        <span className="count">3</span>
      </div>
    </div>
  );
}

export default Navbar;
