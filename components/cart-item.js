import ReactSVG from 'react-svg';

export default props => (
  <div className="cart__row">
    <div className="cart__description">
      <div className="cart__product-thumb">
        <img src="http://placehold.it/100x100?text=+" />
      </div>
      <div className="cart__product-name">
        <p className={`strain--${props.type}`}>
          <a>{props.name}</a>
        </p>
        <p>{props.brand}</p>
      </div>
    </div>
    <div className="cart__controls">
      <div
        className="controls__delete cart__controls-item"
        onClick={props.deleteCartItem}
      >
        <ReactSVG
          src="/static/icons/_ionicons_svg_ios-trash.svg"
          svgStyle={{ width: '2rem' }}
        />
      </div>
      <div className="controls__amount cart__controls-item">
        <div className="controls__price">${props.price}</div>
        <div className="controls__qty">Qty: 1</div>
      </div>
      <div className="controls__quantity cart__controls-item">
        <ReactSVG
          src="/static/icons/_ionicons_svg_ios-add-circle-outline.svg"
          svgStyle={{ width: '2rem' }}
        />
      </div>
    </div>

    <style jsx>{`
      p {
        margin: 0;
      }

      .cart__row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        padding: 1rem 0;
      }

      .cart__description {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .cart__product-name {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
      }

      .cart__controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cart__controls-item {
        margin-left: 2rem;
      }
    `}</style>
  </div>
);
