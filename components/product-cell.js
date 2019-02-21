import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import { viewProduct, addToCart } from '../store';
import Link from 'next/link';

class ProductCell extends Component {
  showProduct = () => {
    this.props.viewProduct(this.props.id);
  };

  addToCart = (e, id) => {
    e.stopPropagation();
    this.props.addToCart(3);
  };

  render() {
    const { image, type, name, brand, price } = this.props;

    const gridStyle = this.props.gridStyle && {
      flex: '1 0 calc(30% - 1.125rem)'
    };

    return (
      <div className="product" style={gridStyle} onClick={this.showProduct}>
        <div className="product__image">
          {this.props.video ? (
            <video src={`/static/${image}`} autoPlay muted loop={true} />
          ) : (
            <img src={`/static/products/${image}`} />
          )}
          <button
            className="product__add"
            onClick={(e, id) => this.addToCart(e, id)}
          >
            <ReactSVG
              src="/static/icons/_ionicons_svg_ios-add-circle-outline.svg"
              svgStyle={{ width: '2rem', fill: '#666' }}
            />
          </button>
        </div>

        <div className="product__info">
          <div className={`product__name strain--${type.toLowerCase()}`}>
            {name} {type && `- ${type}`}
          </div>
          <div className="product__brand">{brand}</div>
          <div className="product__price">${price}</div>
        </div>

        <style jsx>{`
          .product {
            display: flex;
            flex-direction: column;
            width: calc(25% - 1.125rem);
            margin: 2rem 1.5rem 1.5rem 0;
            cursor: pointer;
          }

          .product:last-child {
            margin-right: 0;
          }

          video {
            width: 100%;
          }
          video:last-child {
            margin: 0;
          }

          img {
            height: 250px;
            object-fit: cover;
          }

          .img:last-child {
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

          .product__image {
            position: relative;
          }

          .product:hover .product__add {
            opacity: 1;
          }

          .product__add {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0.5rem;
            transform: scale(0.9);
            opacity: 0;
          }

          .product__add:hover {
            transition: 0.3s ease;
            transform: scale(1);
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
  { viewProduct, addToCart }
)(ProductCell);
