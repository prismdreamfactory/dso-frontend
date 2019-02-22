import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import Layout from '../components/layout';
import Home from '../components/home';
import Cart from '../components/cart';
import Product from '../components/product';
import { fetchProducts } from '../store';

class Index extends Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <Nav alt />

        <Layout>
          <Home {...this.props} />
          {this.props.showCart && <Cart />}
          {this.props.showProduct && (
            <Product currentProduct={this.props.currentProduct} />
          )}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCart: state.showCart,
  showProduct: state.showProduct,
  currentProduct: state.currentProduct,
  products: state.products,
  collections: state.collections
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Index);
