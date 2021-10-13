import React from "react";

function CartItem(props) {
  const { title, price, qty, url } = props.values;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img src={url} alt="img" style={styles.images} />
      </div>
      <div className="right-block">
        <div style={styles.title}>{title}</div>
        <div style={styles.details}>Rs {price}</div>
        <div style={styles.details}>Qty:{qty}</div>
        <div className="cart-item-actions">
          <button onClick={() => props.handlePlusClick(props.values)}>
            plus
          </button>
          <button onClick={() => props.handleMinusClick(props.values)}>
            minus
          </button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  images: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  details: {
    fontSize: 15,
    color: "grey",
  },
};

export default CartItem;
