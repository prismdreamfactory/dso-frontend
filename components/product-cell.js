import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewProduct } from '../store';

class ProductCell extends Component {
  showProduct = () => {
    this.props.viewProduct();
  };

  render() {
    const { image, type, name, brand, price } = this.props;

    return (
      <div className="product" onClick={this.showProduct}>
        <img className="product__image" src={image} />
        <div className="product__info">
          <div className={`product__name strain--${type}`}>{name}</div>
          <div className="product__brand">{brand}</div>
          <div className="product__price">{price}</div>
        </div>

        <style jsx>{`
          .product {
            display: flex;
            flex-direction: column;
            // width: calc(25% - 1.125rem);
            margin: 2rem 1.5rem 1.5rem 0;
            cursor: pointer;
            flex: 1 0 calc(25% - 1.125rem);
          }

          .product:last-child {
            margin-right: 0;
          }

          .product__image {
            height: 250px;
            object-fit: cover;
          }

          .product__image:last-child {
            margin: 0;
          }

          .product__info {
            margin: 1rem 0;
          }

          .product__name {
            // color: #fff;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }

          .product__brand {
            // color: #fff;
          }

          .product__price {
            // color: #fff;
            font-weight: 700;
            margin-top: 0.5rem;
          }

          @media (max-width: 768px) {
            .product {
              width: 100%;
              margin-right: 1rem;
            }

            .product__image {
              height: 150px;
            }
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showProduct: state.showProduct
});

export default connect(
  mapStateToProps,
  { viewProduct }
)(ProductCell);
