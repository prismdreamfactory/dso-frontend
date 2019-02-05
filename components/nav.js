import React from 'react';
import Link from 'next/link';

// const links = [
//   { href: '/search', label: 'Search' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

const Nav = () => (
  <nav>
    <div className="header--left">
      <div className="header__group">
        <Link href="/join">
          <a className="header__link">Join</a>
        </Link>
        <Link href="/search">
          <a className="header__link">Search</a>
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
          <a className="header__link">Login</a>
        </Link>
        <Link href="/cart">
          <a className="header__link">Cart</a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1.78125rem;
      }

      .logo {
        cursor: pointer;
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
