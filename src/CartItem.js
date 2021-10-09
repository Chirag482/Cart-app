import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Phone",
      price: 999,
      qty: 1,
      initialPrice: 999,
    };
  }
  handlePlusClick = () => {
    this.setState({
      qty: this.state.qty + 1,
      price: this.state.initialPrice + this.state.price,
    });
  };
  handleMinusClick = () => {
    this.setState({
      qty: this.state.qty - 1,
      price: this.state.price - this.state.initialPrice,
    });
  };
  render() {
    const { title, price, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            src="https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="img"
            style={styles.images}
          />
        </div>
        <div className="right-block">
          <div style={styles.title}>{title}</div>
          <div style={styles.details}>Rs {price}</div>
          <div style={styles.details}>Qty:{qty}</div>
          <div className="cart-item-actions">
            <button onClick={this.handlePlusClick}>plus</button>
            <button onClick={this.handleMinusClick}>minus</button>
            <button>delete</button>
          </div>
        </div>
      </div>
    );
  }
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
