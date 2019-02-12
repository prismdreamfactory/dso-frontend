import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Home from '../components/home';
import Cart from '../components/cart';

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
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  showCart: state.showCart
});

export default connect(mapStateToProps)(Index);
