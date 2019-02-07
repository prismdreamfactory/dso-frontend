import React from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';

// const links = [
//   { href: '/search', label: 'Search' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

const Nav = () => (
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
        <Link href="/cart">
          <a className="header__link">
            <ReactSVG
              src="/static/icons/_ionicons_svg_ios-cart.svg"
              svgStyle={{ width: '20px' }}
            />
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1.875rem;
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
      }
      .header--right {
        justify-content: flex-end;
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

export default Nav;
