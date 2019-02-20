import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import ReactSVG from 'react-svg';
import Button from '../microcomponents/button';
import CartItem from './cart-item';

import { toggleCart, removeFromCart } from '../store';

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 }
};

class Cart extends Component {
  state = { in: false };

  componentDidMount() {
    this.setState({ in: true });
  }

  closeCart = () => {
    this.setState({ in: false });
  };

  deleteCartItem = id => {
    this.props.removeFromCart(id);
  };

  render() {
    const { cart, products } = this.props;
    const cartItems = cart.map(productId => products[productId]);
    const cartTotal = cart
      .map(productId => products[productId].price)
      .reduce((sum, value) => sum + value, 0);

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

              <section className="cart-container">
                <div>
                  {cartItems.map(props => (
                    <CartItem
                      key={props.id}
                      {...props}
                      deleteCartItem={() => this.deleteCartItem(props.id)}
                    />
                  ))}
                </div>
              </section>

              <section className="cart__subtotal">
                <div>Subtotal</div>
                <div>${cartTotal}</div>
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
                margin: 0;
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
                // top: 100%;
                top: 3rem;
                display: flex;
                flex-direction: column;
                width: 45rem;
                background-color: rgb(255, 255, 255);
                border-radius: 0.4rem;
                padding: 1rem 4rem 0;
                background: url(https://stylehouserentals.com/wp-content/uploads/2018/11/white-marble-2.jpg);
                transition: 0.1s ease;
              }

              .cart-container {
                border-top: 1px solid #ccc;
                overflow-y: scroll;
                justify-content: flex-start;
                height: calc(100vh - 20rem);
                padding: 0 2rem 0 0;
              }

              .cart__subtotal {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 1.25rem;
                border-top: 1px solid #ccc;
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
  showCart: state.showCart,
  cart: state.cart,
  products: state.products
});

export default connect(
  mapStateToProps,
  { toggleCart, removeFromCart }
)(Cart);
