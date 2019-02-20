import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import ReactSVG from 'react-svg';
import Button from '../microcomponents/button';

import { viewProduct, addToCart } from '../store';

const transitionStyles = {
  entering: { top: '100%' },
  entered: { top: '3rem' },
  exiting: { top: '100%' }
};

class Product extends Component {
  state = { in: false };

  componentDidMount() {
    this.setState({ in: true });
  }

  closeProduct = () => {
    this.setState({ in: false });
  };

  addToCart = (e, id) => {
    e.preventDefault();
    this.props.addToCart(3);
  };

  render() {
    return (
      <Transition
        in={this.state.in}
        timeout={100}
        onExited={this.props.viewProduct}
      >
        {state => (
          <div className="menu-wrapper">
            <div
              className="menu"
              style={{
                ...transitionStyles[state]
              }}
            >
              <div onClick={this.closeProduct} className="close-button">
                <ReactSVG
                  src="/static/icons/close.svg"
                  svgStyle={{ width: '1.5rem' }}
                />
              </div>

              <div className="menu__description">
                <div className="menu__content">
                  <div className="product__info">
                    <h2 className="product__name strain--indica">
                      Sundae Driver
                    </h2>
                    <div className="product__brand">Jungle Boys</div>
                    <div className="product__price">$125</div>
                  </div>

                  <p>
                    Mellow out with headstrong, calming, and tranquil vibes. Old
                    Pal indica strains will help you unwind and relax. Naturally
                    grown under the California sun, this flower will chill you
                    out. Sharing is encouraged. Weight: 1/8th oz. (License No.
                    C11-18-0000024-TEMP)
                  </p>

                  <p>
                    Mellow out with headstrong, calming, and tranquil vibes. Old
                    Pal indica strains will help you unwind and relax. Naturally
                    grown under the California sun, this flower will chill you
                    out. Sharing is encouraged. Weight: 1/8th oz. (License No.
                    C11-18-0000024-TEMP)
                  </p>
                </div>
              </div>

              <div className="menu__product">
                <div className="menu__content--product">
                  <img
                    className="product__image"
                    src="/static/curt-ice-01.jpg"
                  />

                  <Button
                    label="Add To Cart"
                    onClick={(e, id) => this.addToCart(e, id)}
                  />

                  <a style={{ marginTop: '1rem' }}>Delivery & Returns</a>
                </div>
              </div>
            </div>

            <style jsx>{`
              .menu-wrapper {
                z-index: 15;
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background: rgba(0, 0, 0, 0.6);
              }

              .menu {
                width: 80vw;
                max-width: 60rem;
                height: 100%;
                margin: 0 auto;
                top: 100%;
                position: relative;
                border-top-left-radius: 5.44px;
                border-top-left-radius: 0.34rem;
                border-top-right-radius: 5.44px;
                border-top-right-radius: 0.34rem;
                outline: none;
                background: #fff;
                background: url(https://stylehouserentals.com/wp-content/uploads/2018/11/white-marble-2.jpg);
                transition: 0.1s ease;
              }

              .menu__description {
                position: absolute;
                width: 50%;
                height: 100%;
              }

              .menu__content {
                padding: 4rem 3rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }

              .menu__content--product {
                padding: 4rem 3rem;
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .menu__product {
                position: absolute;
                top: 0;
                right: 0;
                width: 50%;
                height: 100%;
                // background: rgba(110, 51, 94, 0.85);
                display: flex;
                justify-content: center;
                text-align: center;
              }

              .product__name {
                margin: 0 0 0.25rem 0;
              }
              .product__brand {
                margin-bottom: 0.5rem;
              }
              .product__price {
                font-weight: 700;
              }

              .product__image {
                height: 400px;
                object-fit: cover;
                margin-bottom: 2rem;
              }

              .close-button {
                position: absolute;
                top: 0;
                right: 0;
                padding: 1.5rem;
                cursor: pointer;
                z-index: 1;
              }
            `}</style>
          </div>
        )}
      </Transition>
    );
  }
}

const mapStateToProps = state => ({
  showProduct: state.showProduct
});

export default connect(
  mapStateToProps,
  { viewProduct, addToCart }
)(Product);
