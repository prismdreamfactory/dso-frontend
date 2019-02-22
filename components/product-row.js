import Button from '../microcomponents/button';
import ProductCell from '../components/product-cell';

const ProductRow = props => {
  return (
    <div className={`section section--${props.name}`}>
      <section>
        <div className="section__title section__title--more">
          <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
          </div>
          <div>
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
