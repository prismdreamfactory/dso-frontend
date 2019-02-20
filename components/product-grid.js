import ProductCell from './product-cell';

const ProductGrid = products => {
  return (
    <div style={{ width: '100%' }}>
      <div className="hero">
        <div className="hero__image">
          <section>
            <div className="hero__description">
              <h2 className="hero__title">Flower</h2>
            </div>
          </section>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <h3 className="filters__title">Type</h3>
          <div className="filters__list">
            <button className="strain--hybrid">Hybrid</button>
            <button className="strain--indica">Indica</button>
            <button className="strain--sativa">Sativa</button>
          </div>

          <h3 className="filters__title">Brand</h3>
          <div className="filters__list">
            <button>Jungle Boys</button>
            <button>Got Excellence</button>
            <button>Queen of Hearts</button>
          </div>
        </div>

        <div className="products">
          {Object.values(products)
            .filter(product => product.category === 4)
            .map(props => (
              <ProductCell key={props.id} {...props} gridStyle />
            ))}
        </div>
      </div>

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
            background-image: url(https://images.pexels.com/photos/908283/pexels-photo-908283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
            display: flex;
            justify-content: center;
          }

          .hero__description {
            color: #fff;
            max-width: 40%;
          }

          .container {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            max-width: 75rem;
            margin: 0 auto;
          }

          .filters {
            padding: 2rem 2rem 2rem 0;
            width: 25rem;
          }

          .filters__title {
            margin-bottom: 1rem;
          }

          .filters__list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }

          button {
            margin: 0.5rem 0.5rem 0.5rem 0;
            font-size: 1rem;
            outline: 0;
            color: #000;
            border-color: #000;
            position: relative;
            cursor: pointer;
            min-width: 5rem;
            white-space: nowrap;
            text-align: center;
            padding: 0.2rem 0.5rem;
            border-width: 0.1rem;
            border-style: solid;
            border-radius: 0.2rem;
          }

          button:hover {
            background-color: #000;
            color: #fff;
          }

          .strain--indica {
            color: rgb(110, 51, 94);
            border-color: rgb(110, 51, 94);
          }
          .strain--indica:hover {
            background-color: rgb(110, 51, 94);
            color: #fff;
          }
          .strain--sativa {
            color: rgb(212, 71, 39);
            border-color: rgb(212, 71, 39);
          }
          .strain--sativa:hover {
            background-color: rgb(212, 71, 39);
            color: #fff;
          }
          .strain--hybrid {
            color: rgb(118, 189, 29);
            border-color: rgb(118, 189, 29);
          }
          .strain--hybrid:hover {
            background-color: rgb(118, 189, 29);
            color: #fff;
          }

          .products {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 50rem;
          }
        `}
      </style>
    </div>
  );
};

export default ProductGrid;
