import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Home from '../components/home';
import Cart from '../components/cart';
import Product from '../components/product';

class Index extends Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  render() {
    return (
      <Layout>
        <Home />
        {this.props.showCart && <Cart />}
        {this.props.showProduct && <Product />}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  showCart: state.showCart,
  showProduct: state.showProduct
});

export default connect(mapStateToProps)(Index);
