import Button from '../microcomponents/button';
import ProductCell from '../components/product-cell';

const ProductRow = props => {
  return (
    <div className={`section section--${props.name}`}>
      <section>
        <div className="section__title section__title--more">
          <div className="section__heading">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
          </div>
          <div className="button-wrapper">
            <Button
              label="View Collection"
              href={`/collection/${props.name}`}
            />
          </div>
        </div>

        <div className="products">
          {Object.values(props.products)
            .filter(product => product.category === props.id)
            .map(props => (
              <ProductCell key={props.id} {...props} />
            ))}
        </div>
      </section>

      <style jsx>{`
        .section__heading {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .button-wrapper {
          position: absolute;
          right: 0;
        }

        .products {
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
        }

        @media (max-width: 768px) {
        }
      `}</style>
    </div>
  );
};

export default ProductRow;
