import ProductCell from './product-cell';

const ProductGrid = products => {
  return (
    <div style={{ width: '100%' }}>
      <div className="hero">
        <div className="hero__image">
          <section>
            <div className="hero__description">
              <h2 className="hero__title">Flower</h2>
              <p>Designer Strains Only</p>
            </div>
          </section>
        </div>
      </div>

      <section>
        <div className="products">
          {Object.values(products).map(props => (
            <ProductCell key={props.id} {...props} />
          ))}
        </div>
      </section>

      <style jsx>
        {`
          .hero {
            display: flex;
            width: 100%;
            height: 300px;
            // height: calc(100vh - 100px);
            position: relative;
          }

          .hero__title {
            font-size: 5vw;
          }

          .hero__image {
            width: 100%;
            fbackground-size: cover;
            background-position: 0 50%;
            background-image: url(/static/hero.jpg);
            display: flex;
            justify-content: center;
          }

          .hero__description {
            color: #fff;
            max-width: 40%;
            padding: 0 2rem;
          }

          .products {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
};

export default ProductGrid;
