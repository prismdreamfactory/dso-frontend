import React, { Component } from 'react';
import Nav from '../components/nav';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Cart from '../components/cart';
import ProductGrid from '../components/product-grid';
import Product from '../components/product';
import Head from 'next/head';
import { fetchProducts } from '../store';

class Collection extends Component {
  static getInitialProps = ({ query }) => ({ name: query.name, id: query.id });

  componentDidMount() {
    this.props.fetchProducts();
  }

  getCollection = () =>
    Object.values(this.props.products).filter(
      product => product.category === this.props.id
    );

  render = () => (
    <div>
      <Nav goBack={true} alt />

      <Layout>
        <Head>
          <meta name="title" />
        </Head>

        <ProductGrid {...this.getCollection()} />
        {this.props.showCart && <Cart />}
        {this.props.showProduct && (
          <Product currentProduct={this.props.currentProduct} />
        )}
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  showCart: state.showCart,
  showProduct: state.showProduct,
  currentProduct: state.currentProduct
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Collection);
