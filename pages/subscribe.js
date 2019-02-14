import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Cart from '../components/cart';
import Button from '../microcomponents/button';
import Product from '../components/product';
import { toggleCart, viewProduct } from '../store';

class Subscribe extends Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  showProduct = () => {
    this.props.viewProduct();
  };

  render() {
    return (
      <Layout>
        {this.props.showCart && <Cart />}

        {this.props.showProduct && <Product />}

        <div className="hero">
          <div className="hero__image">
            <section>
              <div className="hero__description">
                <h3>High-end designer strains only</h3>
                <p>Want to order? Visit our store.</p>
                <Button label="Shop" alt href="/shop" />
              </div>
            </section>
          </div>
        </div>

        <div className="section__title">
          <h2>Choose a Subscription</h2>
        </div>

        <section>
          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/curt-ice-01.jpg" />
              <div className="product__info">
                <div className="product__name">Snoop D Oh Double G</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$150/mo</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/product-02.jpg" />
              <div className="product__info">
                <div className="product__name">GTA XXX</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125/mo</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/curt-ice-01.jpg" />
              <div className="product__info">
                <div className="product__name">Chong's Choice</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125/mo</div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .hero {
            display: flex;
            width: 100%;
            height: 450px;
            position: relative;
          }

          .hero__image {
            width: 100%;
            background-size: cover;
            background-position: 0 50%;
            background-image: url(/static/hero.jpg);
            display: flex;
            justify-content: center;
          }

          .hero__description {
            color: #fff;
            max-width: 40%;
            padding: 0 2rem;
          }

          .brands {
            width: 100%;
            padding: 1rem 0;
            // background: #000;
            border-bottom: 1px solid #ccc;
          }

          .brands__container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
          .brands__logo {
            max-width: 75px;
          }

          .vid-grid {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .vid-grid__row {
            display: flex;
            align-items: center;
            margin: 0.5rem 0;
          }
          video {
            width: calc(20% - 0.8rem);
            margin-right: 1rem;
          }
          video:last-child {
            margin: 0;
          }

          .products {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
          }

          .product {
            display: flex;
            flex-direction: column;
            width: calc(33.333333% - 1.33333rem);
            margin: 2rem 2rem 1.5rem 0;
            cursor: pointer;
          }

          .product:last-child {
            margin-right: 0;
          }

          .product__image {
            height: 350px;
            object-fit: cover;
          }
          .product__image:last-child {
            margin: 0;
          }

          .product__info {
            margin: 1rem 0;
          }

          .product__name {
            font-weight: 700;
            margin-bottom: 0.25rem;
          }

          .product__price {
            font-weight: 700;
            margin-top: 0.5rem;
          }

          .products--large {
            display: flex;
            justify-content: center;
          }

          .product--large {
            margin-right: 2rem;
          }
          .product--large:last-child {
            margin-right: 0;
          }
        `}</style>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  showCart: state.showCart,
  showProduct: state.showProduct
});

export default connect(
  mapStateToProps,
  { toggleCart, viewProduct }
)(Subscribe);
