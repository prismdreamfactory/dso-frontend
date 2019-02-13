import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Cart from '../components/cart';
import Button from '../microcomponents/button';

class Shop extends Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  render() {
    return (
      <Layout>
        {this.props.showCart && <Cart />}

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
          <div className="product">
            <img className="product__image" src="/static/product-02.jpg" />
            <img className="product__image" src="/static/curt-ice-01.jpg" />
            <img className="product__image" src="/static/product-02.jpg" />
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

          .product {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
          }
          .product__image {
            width: calc(33.333333% - 0.6666rem);
            margin-right: 1rem;
          }
          .product__image:last-child {
            margin: 0;
          }

          .product__info {
            margin: 0 3.75rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
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

export default connect()(Shop);
