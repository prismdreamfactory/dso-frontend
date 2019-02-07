import Layout from '../components/layout';
import Button from '../microcomponents/button';

const Shop = () => (
  <Layout>
    {/* <div className="vid-grid">
      <div className="vid-grid__row">
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
      </div>
      <div className="vid-grid__row">
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
      </div>
    </div> */}

    <div className="product">
      <img className="product__image" src="/static/product-02.jpg" />
      <img className="product__image" src="/static/curt-ice-01.jpg" />
      <img className="product__image" src="/static/product-02.jpg" />
    </div>

    <div className="product">
      <img className="product__image" src="/static/curt-ice-01.jpg" />
      <img className="product__image" src="/static/product-02.jpg" />
      <img className="product__image" src="/static/curt-ice-01.jpg" />
    </div>

    <style jsx>{`
      .vid-grid {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }
      .vid-grid__row {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
      }
      video {
        width: calc(20% - 0.8rem);
        margin-right: 1rem;
      }

      .product {
        margin: 1.875rem 0;
        display: flex;
        align-items: center;
      }
      .product__image {
        width: 33.333333%;
      }
      .product__info {
        margin: 0 3.75rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Shop;
