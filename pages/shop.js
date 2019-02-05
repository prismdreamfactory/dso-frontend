import Layout from '../components/layout';

const Shop = () => (
  <Layout>
    <div className="vid-grid">
      <div className="vid-grid__row">
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
      </div>
      <div className="vid-grid__row">
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/video-03.mp4" autoplay="" muted loop="true" />
        <video src="/static/360-video-03.mp4" autoplay="" muted loop="true" />
      </div>
    </div>
    <style jsx>{`
      .vid-grid {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .vid-grid__row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem 0;
      }
      video {
        width: 200px;
        margin: 0 0.5rem;
      }
    `}</style>
  </Layout>
);

export default Shop;
