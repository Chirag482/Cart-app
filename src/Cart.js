import React, { Component } from "react";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          title: "Phone",
          price: 999,
          qty: 1,
          initialPrice: 999,
          url: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
        {
          title: "Laptop",
          price: 47999,
          qty: 1,
          initialPrice: 47999,
          url: "https://m.media-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg",
        },
        {
          title: "Headphones",
          price: 3499,
          qty: 1,
          initialPrice: 3499,
          url: "https://m.media-amazon.com/images/I/811u6QEwQxL._AC_SX355_.jpg",
        },
      ],
    };
  }
  handlePlusClick = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    products[index].price += products[index].initialPrice;
    this.setState({
      products: products,
    });
  };
  handleMinusClick = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty <= 0) {
      return;
    }
    products[index].qty -= 1;
    products[index].price -= products[index].initialPrice;
    this.setState({
      products: products,
    });
  };
  handleDelete = (product) => {
    const { products } = this.state;

    const items = products.filter((item) => item.title !== product.title);

    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <div className="cart">
          {products.map((item, index) => (
            <CartItem
              values={item}
              key={index}
              handleMinusClick={this.handleMinusClick}
              handlePlusClick={this.handlePlusClick}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
