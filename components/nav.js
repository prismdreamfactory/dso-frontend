import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewCart } from '../store';
import Link from 'next/link';
import ReactSVG from 'react-svg';

// const links = [
//   { href: '/search', label: 'Search' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

class Nav extends Component {
  showCart = () => {
    viewCart();
  };

  render() {
    return (
      <nav className="header">
        <div className="header--left">
          <div className="header__group">
            <Link href="/join">
              <a className="header__link">Join</a>
            </Link>
            <Link href="/search">
              <a className="header__link">
                <ReactSVG
                  src="/static/icons/_ionicons_svg_md-search.svg"
                  svgStyle={{ width: '20px' }}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="header--center">
          <Link prefetch href="/">
            <h1>
              <a className="logo">Designer Strains Only</a>
            </h1>
          </Link>
        </div>

        <div className="header--right">
          <div className="header__group">
            <Link href="/shop">
              <a className="header__link">Shop</a>
            </Link>
            <Link href="/login">
              <a className="header__link">
                <ReactSVG
                  src="/static/icons/_ionicons_svg_md-person.svg"
                  svgStyle={{ width: '20px' }}
                />
              </a>
            </Link>
            <a onClick={this.showCart} className="header__link">
              <ReactSVG
                src="/static/icons/_ionicons_svg_ios-cart.svg"
                svgStyle={{ width: '20px' }}
              />
            </a>
          </div>
        </div>

        <style jsx>{`
          nav {
            display: flex;
            justify-content: center;
            align-items: center;
            // padding: 0 1.875rem;

            position: fixed;
            width: 100%;
            z-index: 1;
            background: #fff;
          }

          .logo {
            cursor: pointer;
          }

          .header {
            border-bottom: 1px solid #e5e4e4;
          }
          .header--left,
          .header--right {
            flex: 1;
            display: flex;
            padding-left: 1.875rem;
          }
          .header--right {
            justify-content: flex-end;
            padding: 0 1.875rem 0 0;
          }
          .header__group {
            display: flex;
            align-items: center;
          }
          .header__link {
            margin-left: 1.875rem;
          }
          .header__link:first-child {
            margin: 0;
          }
        `}</style>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(
  mapStateToProps,
  { viewCart }
)(Nav);
