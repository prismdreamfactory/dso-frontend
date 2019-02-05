import React from 'react';
import Link from 'next/link';

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Login' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <div className="header--left" />

    <div className="header--center">
      <Link prefetch href="/">
        <a>Designer Strains Only</a>
      </Link>
    </div>

    <div className="header--right">
      <ul>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>
              <img src="/static/icons/shopping-bag.svg" />
            </a>
          </Link>
        </li>
      </ul>
    </div>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li {
        float: left;
      }

      .header--left,
      .header--right {
        flex: 1;
        display: flex;
      }

      .header--right {
        justify-content: flex-end;
      }
    `}</style>
  </nav>
);

export default Nav;
