import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../store';
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
    this.props.toggleCart();
  };

  render() {
    return (
      <nav className="header">
        <div className="header--left">
          <div className="header__group">
            <Link href="/subscribe">
              <a className="header__link">Join</a>
            </Link>
            <a className="header__link">
              <ReactSVG
                src="/static/icons/_ionicons_svg_md-search.svg"
                svgStyle={{ width: '20px', fill: '#fff' }}
              />
            </a>
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
            <a className="header__link">
              <ReactSVG
                src="/static/icons/_ionicons_svg_md-person.svg"
                svgStyle={{ width: '20px', fill: '#fff' }}
              />
            </a>
            <a onClick={this.showCart} className="header__link">
              <ReactSVG
                src="/static/icons/_ionicons_svg_ios-cart.svg"
                svgStyle={{ width: '20px', fill: '#fff' }}
              />
            </a>
          </div>
        </div>

        <div className="mobile-nav">
          <span />
          <span />
          <span />
        </div>

        <style jsx>{`
          nav {
            display: flex;
            justify-content: center;
            align-items: center;
            // padding: 0 1.875rem;

            position: absolute;
            // position: fixed;
            width: 100%;
            z-index: 1;
            color: #fff;
            // background: #fff;
          }

          .logo {
            cursor: pointer;
          }

          .header {
            // border-bottom: 1px solid #e5e4e4;
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

          .mobile-nav {
            display: hidden;
          }

          @media (max-width: 768px) {
            .header--left,
            .header--right {
              display: none;
            }

            .logo {
              font-size: 1rem;
            }

            .mobile-nav {
              display: block;
              left: 1rem;
              top: 1.5rem;
              position: absolute;
            }

            .mobile-nav span {
              display: block;
              width: 33px;
              height: 2px;
              margin-bottom: 10px;
              position: relative;

              background: #cdcdcd;
              border-radius: 3px;

              z-index: 1;

              transform-origin: 4px 0px;

              transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
                background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
                opacity 0.55s ease;
            }

            .mobile-nav span:first-child {
              transform-origin: 0% 0%;
            }

            .mobile-nav span:nth-last-child(2) {
              transform-origin: 0% 100%;
            }

            .mobile-nav input:checked ~ span {
              opacity: 1;
              transform: rotate(45deg) translate(-2px, -1px);
              background: #232323;
            }

            .mobile-nav input:checked ~ span:nth-last-child(3) {
              opacity: 0;
              transform: rotate(0deg) scale(0.2, 0.2);
            }

            .mobile-nav input:checked ~ span:nth-last-child(2) {
              transform: rotate(-45deg) translate(0, -1px);
            }
          }
        `}</style>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(
  mapStateToProps,
  { toggleCart }
)(Nav);
