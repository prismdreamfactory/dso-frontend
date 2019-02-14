import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../microcomponents/button';
import ReactSVG from 'react-svg';
import { toggleCart } from '../store';

class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="hero">
          <div className="hero__image">
            <section>
              <div className="hero__description">
                <h3>High-end designer strains only</h3>
                <p>
                  Get a curated box monthly filled with certified DSO-grade
                  cannabis products delivered to you.
                </p>
                <Button label="Subscribe" alt href="/subscribe" />
              </div>
            </section>
          </div>
        </div>

        <div className="brands">
          <section className="brands__container">
            <div className="brands__logo">
              <img src="/static/logo-jungleboys.png" />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-jungleboys.png" />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-jungleboys.png" />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-jungleboys.png" />
            </div>
          </section>
        </div>

        <div className="section__title">
          <h2>How It Works</h2>
          <p>DSO Grade Strains A La Carte</p>
        </div>

        <div className="how">
          <section className="how__container">
            <div className="how__items">
              <div className="how__item">
                <img className="how__image" src="/static/icons/au-box.svg" />
                <p>Select your box.</p>
              </div>
              <div className="how__item">
                <img className="how__image" src="/static/icons/au-id.svg" />
                <p>Create account.</p>
              </div>
              <div className="how__item">
                <img
                  className="how__image"
                  src="/static/icons/au-deliver.svg"
                />
                <p>Get it delivered.</p>
              </div>
            </div>

            <Button label="Join" href="/subscribe" />
          </section>
        </div>

        <section>
          <div className="section__title">
            <h2>Featured</h2>
            <p>DSO Grade Strains A La Carte</p>
          </div>

          <div className="vid-grid">
            <div className="vid-grid__row">
              <video
                src="/static/360-video-03.mp4"
                autoPlay
                muted
                loop={true}
              />
              <video src="/static/video-03.mp4" autoPlay muted loop={true} />
              <video
                src="/static/360-video-03.mp4"
                autoPlay
                muted
                loop={true}
              />
              <video src="/static/video-03.mp4" autoPlay muted loop={true} />
              <video
                src="/static/360-video-03.mp4"
                autoPlay
                muted
                loop={true}
              />
            </div>
            <div className="vid-grid__row">
              <video src="/static/video-03.mp4" autoPlay muted loop={true} />
              <video
                src="/static/360-video-03.mp4"
                autoPlay
                muted
                loop={true}
              />
              <video src="/static/video-03.mp4" autoPlay muted loop={true} />
              <video
                src="/static/360-video-03.mp4"
                autoPlay
                muted
                loop={true}
              />
              <video src="/static/video-03.mp4" autoPlay muted loop={true} />
            </div>
          </div>

          <div className="products--large">
            <div className="product--large">
              <img src="/static/curt-ice-02.jpg" />
            </div>
            <div className="product--large">
              <img src="/static/curt-ice-02.jpg" />
            </div>
          </div>
        </section>

        <style jsx>{`
          .hero {
            display: flex;
            width: 100%;
            height: 450px;
            position: relative;
          }

          .hero__image {
            width: 100%;
            background-size: cover;
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

          .brands {
            width: 100%;
            padding: 1rem 0;
            // background: #000;
            border-bottom: 1px solid #ccc;
          }

          .brands__container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
          .brands__logo {
            max-width: 75px;
          }

          .how__container {
            display: flex;
            align-items: center;
          }

          .how__items {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 2rem;
          }

          .how__item {
            text-align: center;
          }

          .how__image {
            height: 200px;
          }

          .vid-grid {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            margin: 1rem 0;
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
          video:last-child {
            margin: 0;
          }

          .product {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
          }
          .product__image {
            width: calc(33.333333% - 0.6666rem);
            margin-right: 1rem;
          }
          .product__image:last-child {
            margin: 0;
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

          .products--large {
            display: flex;
            justify-content: center;
          }

          .product--large {
            margin-right: 2rem;
          }
          .product--large:last-child {
            margin-right: 0;
          }

          @media (max-width: 768px) {
            .hero__description {
              max-width: 100%;
            }

            .how__items {
              display: block;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default connect(
  '',
  { toggleCart }
)(Home);
