import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import Layout from '../components/layout';
import Home from '../components/home';
import Cart from '../components/cart';
import Product from '../components/product';

class Index extends Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  render() {
    return (
      <div>
        <Nav />

        <Layout>
          <Home {...this.props.products} />
          {this.props.showCart && <Cart />}
          {this.props.showProduct && <Product />}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCart: state.showCart,
  showProduct: state.showProduct
});

export default connect(mapStateToProps)(Index);
