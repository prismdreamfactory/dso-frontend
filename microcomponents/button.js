import React, { PureComponent } from 'react';
import Link from 'next/link';

class Button extends PureComponent {
  render() {
    return (
      <Link href={this.props.href || ''} as={this.props.as}>
        <button
          onClick={this.props.handleClick}
          className={this.props.alt ? 'alt' : ''}
        >
          {this.props.label}

          <style jsx>{`
            button {
              box-sizing: border-box;
              cursor: pointer;
              display: inline-flex;
              justify-content: center;
              height: 2.75rem;
              border-radius: 1.5rem;
              font-size: 0.9375rem;
              line-height: 1.0625rem;
              padding: 0 2rem;
              border: 1px solid #000;
              width: 100%;
              max-width: 250px;
              transition: 0.1s;
            }

            button.alt {
              border-color: #fff;
            }

            button:hover {
              background-color: #000;
              color: #fff;
            }

            button.alt:hover {
              border-color: #000;
            }
          `}</style>
        </button>
      </Link>
    );
  }
}

export default Button;
