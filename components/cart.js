import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import ReactSVG from 'react-svg';
import Button from '../microcomponents/button';

import { toggleCart } from '../store';

const transitionStyles = {
  entering: { top: '100%' },
  entered: { top: '3rem' },
  exiting: { top: '100%' }
};

class Cart extends Component {
  state = { in: false };

  componentDidMount() {
    this.setState({ in: true });
  }

  closeCart = () => {
    this.setState({ in: false });
  };

  render() {
    return (
      <Transition
        in={this.state.in}
        timeout={100}
        onExited={this.props.toggleCart}
      >
        {state => (
          <div className="cart-wrapper">
            <div
              className="cart"
              style={{
                ...transitionStyles[state]
              }}
            >
              <h2>Cart</h2>

              <section>
                <div className="cart__row">
                  <div className="cart__description">
                    <div className="cart__product-thumb">
                      <img src="http://placehold.it/100x100?text=+" />
                    </div>
                    <div className="cart__product-name">
                      <a>Sundae Driver</a>
                      <p>Jungle Boys</p>
                    </div>
                  </div>
                  <div className="cart__controls">
                    <div className="controls__delete cart__controls-item">
                      <ReactSVG
                        src="/static/icons/_ionicons_svg_ios-trash.svg"
                        svgStyle={{ width: '2rem' }}
                      />
                    </div>
                    <div className="controls__amount cart__controls-item">
                      <div className="controls__price">$35</div>
                      <div className="controls__qty">Qty: 1</div>
                    </div>
                    <div className="controls__quantity cart__controls-item">
                      <ReactSVG
                        src="/static/icons/_ionicons_svg_ios-add-circle-outline.svg"
                        svgStyle={{ width: '2rem' }}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="cart__subtotal">
                <div>Subtotal</div>
                <div>$35</div>
              </section>

              <div onClick={this.closeCart} className="close-button">
                <ReactSVG
                  src="/static/icons/close.svg"
                  svgStyle={{ width: '1.5rem' }}
                />
              </div>

              <section className="cart__checkout">
                <Button label="Checkout" />
              </section>
            </div>

            <style jsx>{`
              section {
                padding: 1rem 0;
              }
              p {
                margin: 0;
              }

              .cart-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 11;
                background: rgba(0, 0, 0, 0.6);
                // opacity: 0;
              }

              .cart {
                height: calc(100% - 3rem);
                position: absolute;
                top: 100%;
                display: flex;
                flex-direction: column;
                width: 45rem;
                background-color: rgb(255, 255, 255);
                border-radius: 0.4rem;
                padding: 1rem 4rem 0;
                background: url(https://stylehouserentals.com/wp-content/uploads/2018/11/white-marble-2.jpg);
                transition: 0.1s ease;
              }

              .cart__row {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                font-size: 1rem;
                padding: 1rem 0;
              }

              .cart__description {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .cart__product-name {
                display: flex;
                flex-direction: column;
                margin-left: 2rem;
              }

              .cart__controls {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }

              .cart__controls-item {
                margin-left: 2rem;
              }

              .cart__subtotal {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 1.25rem;
                border-top: 1px solid #ccc;
                padding: 2rem 0;
              }

              .controls__price {
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .controls__amount {
                font-size: 1.2rem;
                font-weight: 700;
              }
              .controls__qty {
                font-size: 0.8rem;
              }

              .cart__checkout {
                display: flex;
                align-items: center;
              }

              .close-button {
                position: absolute;
                top: 0;
                right: 0;
                padding: 2rem;
                cursor: pointer;
              }
            `}</style>
          </div>
        )}
      </Transition>
    );
  }
}

const mapStateToProps = state => ({
  showCart: state.showCart
});

export default connect(
  mapStateToProps,
  { toggleCart }
)(Cart);
