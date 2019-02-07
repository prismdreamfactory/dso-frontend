import React, { PureComponent } from 'react';

class Button extends PureComponent {
  handleClick = () => {
    console.log('working');
  };

  render() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.label}

        <style jsx>{`
          button {
            text-align: center;
            box-sizing: border-box;
            cursor: pointer;
            display: inline-flex;
            height: 3rem;
            border-radius: 1.5rem;
            font-size: 0.9375rem;
            line-height: 1.0625rem;
            padding: 0 2rem;
            border: 1px solid #000;
          }
        `}</style>
      </button>
    );
  }
}

export default Button;
