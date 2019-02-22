import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../microcomponents/button';
import { Link as ScrollLink, Element } from 'react-scroll';
import ProductRow from '../components/product-row';
import ProductCell from '../components/product-cell';
import Link from 'next/link';
import { toggleCart, viewProduct, fetchProducts } from '../store';

class Home extends Component {
  showProduct = () => {
    this.props.viewProduct();
  };

  render() {
    const { collections, products } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <div className="hero">
          <div className="hero__image">
            <div className="hero__video">
              <video
                className="hero__video"
                src="/static/hero.mp4"
                autoPlay
                loop
                muted
              />
            </div>

            <section className="hero__description">
              <div className="section">
                <h3 style={{ marginBottom: 0 }}>
                  Get high-end strains monthly
                </h3>
                <p style={{ maxWidth: '400px' }}>
                  Designer Strains Only is dedicated to providing luxury
                  cannabis strains in a curated monthly members only
                  subscription box. All of our products are rigorously tested
                  and product handled with the utmost respect for our clients.
                </p>
                <ScrollLink
                  activeClass="active"
                  to="subscribe"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <Button label="Subscribe" alt />
                </ScrollLink>
              </div>
            </section>
          </div>
        </div>

        <div className="brands">
          <div className="brands__container">
            <div className="brands__logo">
              <img src="/static/logo-jetfuel.jpg" />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-jungleboys.png" />
            </div>
            <div className="brands__logo">
              <img
                src="/static/logo-aficianado.png"
                style={{ width: '150px' }}
              />
            </div>

            <div className="brands__logo">
              <img src="/static/logo-queenofhearts.png" />
            </div>
            <div className="brands__logo">
              <img
                src="/static/logo-garrisonlane.png"
                style={{ width: '150px' }}
              />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-gorillabrand.png" />
            </div>
          </div>
        </div>

        <div id="subscribe" style={{ paddingTop: '1rem' }}>
          {Object.values(collections).map(collection => (
            <ProductRow {...this.props} {...collection} key={collection.id} />
          ))}
        </div>

        <style jsx>{`
          .hero {
            display: flex;
            width: 100%;
            height: 450px;
            // height: calc(100vh - 100px);
            position: relative;
          }

          .hero__image {
            width: 100%;
            background-size: cover;
            background-position: 0 50%;
            background-color: #000;
            background-image: url(https://images.pexels.com/photos/908283/pexels-photo-908283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
            // display: flex;
            // justify-content: center;
            overflow: hidden;
          }

          .hero__video {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            max-width: 100%;
          }

          .hero__video iframe,
          .hero__video video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 0;
            object-fit: cover;
          }

          .hero__description {
            top: 0;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            // max-width: 40%;
            position: absolute;
            color: #fff;
          }

          .brands {
            width: 100%;
            background: #000;
            background: url(https://i.pinimg.com/originals/eb/9e/cf/eb9ecf6ba9a6d335fa8a321ac7594f4b.jpg);
            background-size: cover;
            border-bottom: 1px solid #ccc;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .brands__container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
          .brands__logo {
            max-width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .how__container {
            display: flex;
            align-items: center;
          }

          .how__items {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 2rem;
          }

          .how__item {
            text-align: center;
          }

          .how__image {
            height: 200px;
          }

          video {
            width: 100%;
          }
          video:last-child {
            margin: 0;
          }

          .products {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
          }

          .section {
            background-size: cover;
          }

          .section--flower {
            // background: url(https://images.unsplash.com/photo-1528372531841-f1228963b0af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80);
          }

          .section--edibles {
            // background: url(https://stylehouserentals.com/wp-content/uploads/2018/11/white-marble-2.jpg);
          }

          .section--cbd {
            // background: url(/static/snake-01.jpg);
          }

          @media (max-width: 768px) {
            .hero__description {
              max-width: 100%;
            }

            .hero__image {
            }

            .hero__image video {
              display: none;
            }

            .how__items {
              display: block;
            }

            .brands__container {
              flex-direction: column;
            }
            .brands__logo {
              margin-bottom: 0.5rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // collections: state.collections,
  // products: state.products
});

export default connect(
  mapStateToProps,
  { toggleCart, viewProduct, fetchProducts }
)(Home);
