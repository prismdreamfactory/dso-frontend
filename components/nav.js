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
  state = {
    currentScrollHeight: 0
  };

  componentDidMount() {
    this.setState({
      currentScrollHeight: window.scrollY
    });

    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 25) * 25;

      if (this.state.currentScrollHeight != newScrollHeight) {
        this.setState({
          currentScrollHeight: newScrollHeight
        });
      }
    };
  }

  showCart = () => {
    this.props.toggleCart();
  };

  render() {
    const opacity = Math.min(this.state.currentScrollHeight / 100, 1);
    const svgStyle =
      this.state.currentScrollHeight > 50 || this.props.alt
        ? { width: '20px', fill: '#fff' }
        : { width: '20px', fill: '#000' };
    const color =
      this.state.currentScrollHeight > 50 || this.props.alt
        ? { color: '#fff' }
        : { color: '#000' };

    return (
      <nav className="header">
        <div className="texture" style={{ opacity }} />

        <div className="header--left">
          <div className="header__group">
            <a className="header__link">
              {/* <ReactSVG
                src="/static/icons/_ionicons_svg_md-search.svg"
                svgStyle={{ width: '20px', fill: '#fff' }}
              /> */}

              {this.props.goBack ? (
                <Link href="/">
                  <div style={color}>Go back</div>
                </Link>
              ) : (
                ''
              )}
            </a>
          </div>
        </div>

        <div className="header--center">
          <Link prefetch href="/">
            <h1 style={color}>
              <a className="logo">Designer Strains Only</a>
            </h1>
          </Link>
        </div>

        <div className="header--right">
          <div className="header__group">
            <a className="header__link">
              <ReactSVG
                src="/static/icons/_ionicons_svg_md-person.svg"
                svgStyle={svgStyle}
              />
            </a>
            <a onClick={this.showCart} className="header__link">
              <ReactSVG
                src="/static/icons/_ionicons_svg_ios-cart.svg"
                svgStyle={svgStyle}
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
          h1 {
            margin: 1rem 0;
          }

          nav {
            display: flex;
            justify-content: center;
            align-items: center;
            // padding: 0 1.875rem;

            // position: absolute;
            position: fixed;
            width: 100%;
            z-index: 1;
            color: #000;
            // background: #fff;
            background-size: cover;
          }

          .texture {
            // background-image: url(https://images.pexels.com/photos/908283/pexels-photo-908283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
            background: #000;
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
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
