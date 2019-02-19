import React, { Component } from 'react';
import Nav from '../components/nav';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Cart from '../components/cart';
import ProductGrid from '../components/product-grid';
import Product from '../components/product';
import Head from 'next/head';
import Link from 'next/link';

class Collection extends Component {
  static getInitialProps = ({ query, page }) => ({ name: query.name, page });

  getCollection = () =>
    this.props.collections.filter(x => x === this.props.name);

  render = () => (
    <div>
      <Nav goBack={true} alt />

      <Layout>
        <Head>
          <meta name="title" />
        </Head>

        <ProductGrid {...this.props.products} />
        {this.props.showCart && <Cart />}
        {this.props.showProduct && <Product />}
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  showCart: state.showCart,
  showProduct: state.showProduct
});

export default connect(mapStateToProps)(Collection);
