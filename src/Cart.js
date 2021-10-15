import React, { Component } from "react";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import Total from "./Total";

import * as firebase from "firebase";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return doc.data();
        });
        this.setState({
          products: products,
          loading: false,
        });
      });
  }

  handlePlusClick = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    products[index].price = products[index].qty * products[index].initialPrice;
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
    const { products, loading } = this.state;
    var count = 0;
    var total = 0;
    products.map((item) => {
      count += item.qty;
      total += item.price;
    });
    return (
      <React.Fragment>
        <Navbar count={count} />
        {loading && <h1>Loading data...</h1>}
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
        <Total total={total} />
      </React.Fragment>
    );
  }
}

export default Cart;
