import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../microcomponents/button';
import Link from 'next/link';
import { toggleCart, viewProduct } from '../store';

class Home extends Component {
  showProduct = () => {
    this.props.viewProduct();
  };

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
                <Button label="Subscribe" alt href="#subscribe" />
              </div>
            </section>
          </div>
        </div>

        <div className="brands">
          <div className="brands__container">
            <div className="brands__logo">
              <img src="/static/logo-jetfuel.jpg" />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-stizzy.png" />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-jungleboys.png" />
            </div>
            <div className="brands__logo">
              <img
                src="/static/logo-aficianado.png"
                style={{ width: '150px' }}
              />
            </div>

            <div className="brands__logo">
              <img src="/static/logo-queenofhearts.png" />
            </div>
            <div className="brands__logo">
              <img
                src="/static/logo-garrisonlane.png"
                style={{ width: '150px' }}
              />
            </div>
            <div className="brands__logo">
              <img src="/static/logo-gorillabrand.png" />
            </div>
          </div>
        </div>

        {/* <div className="section__title">
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
          </section>
        </div> */}

        <section id="subscribe">
          <div className="section__title">
            <h2>Monthly Subscription Box</h2>
            <p>DSO Grade Strains Delivered Direct to Your Door</p>
          </div>

          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/box-05.jpg" />
              <div className="product__info">
                <div className="product__name">Snoop's Choice</div>
                <div className="product__brand">By Snoop Dogg</div>
                <div className="product__price">$125/mo</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/box-06.jpg" />
              <div className="product__info">
                <div className="product__name">Chong's Choice</div>
                <div className="product__brand">By Chong</div>
                <div className="product__price">$200/mo</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/box-04.jpg" />
              <div className="product__info">
                <div className="product__name">Garrison Lanes Top Shelf</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$300/mo</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/box-03.jpg" />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$400/mo</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section__title section__title--more">
            <div>
              <h2>Flower</h2>
              <p>
                The highest-quality bud. Grind it up, roll it, or pack into your
                preferred smoking device.
              </p>
            </div>
            <div>
              <Button label="See More" href="/collection/flower" />
            </div>
          </div>

          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/concentrate-gotexcellence.jpg"
              />
              <div className="product__info">
                <div className="product__name strain--indica">Cherry Pie</div>
                <div className="product__brand">Got Excellence</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/product-01.jpg" />
              <div className="product__info">
                <div className="product__name strain--hybrid">Jet Fuel</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/concentrate-queenofhearts.jpg"
              />
              <div className="product__info">
                <div className="product__name strain--sativa">Gorilla Glue</div>
                <div className="product__brand">420 Queen of Hearts</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img className="product__image" src="/static/curt-ice-01.jpg" />
              <div className="product__info">
                <div className="product__name strain--indica">
                  Sundae Driver
                </div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section__title section__title--more">
            <div>
              <h2>Concentrates</h2>
              <p>
                Highly potent cannabis extracts — favored by advanced customers.
              </p>
            </div>
            <div>
              <Button label="See More" href="/collection/flower" />
            </div>
          </div>

          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/concentrate-02.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/concentrate-goldenleaf.jpg"
              />
              <div className="product__info">
                <div className="product__name strain--indica">
                  Shatter OG Kush
                </div>
                <div className="product__brand">Golden Leaf Scientifics</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/concentrate-03.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/concentrate-01.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section__title section__title--more">
            <div>
              <h2>Edibles</h2>
              <p>DSO Grade Strains</p>
            </div>
            <div>
              <Button label="See More" href="/collection/flower" />
            </div>
          </div>

          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/edibles-01.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/edibles-05.jpg"
              />
              <div className="product__info">
                <div className="product__name">Jet Fuel</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/edibles-04.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/edibles-03.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section__title section__title--more">
            <div>
              <h2>Vaporizer Cartridges</h2>
              <p>Discreet and easy. Use with any 510-compatible battery.</p>
            </div>
            <div>
              <Button label="See More" href="/collection/flower" />
            </div>
          </div>

          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/vape-paris.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/vape-madre.jpg"
              />
              <div className="product__info">
                <div className="product__name">Jet Fuel</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/vape-king.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/vape-abx.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section__title section__title--more">
            <div>
              <h2>CBD</h2>
              <p />
            </div>
            <div>
              <Button label="See More" href="/collection/flower" />
            </div>
          </div>

          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/cbd-koi.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/cbd-select-drops-lavender.jpg"
              />
              <div className="product__info">
                <div className="product__name">Jet Fuel</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/cbd-select.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/cbd-medterra.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">Medterra</div>
                <div className="product__price">$125</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section__title section__title--more">
            <div className="section__title">
              <h2>Glass & Accessories</h2>
              <p>Tools, add-ons, and gear to help you enjoy the moment.</p>
            </div>
            <div>
              <Button label="See More" href="/collection/flower" />
            </div>
          </div>

          <div className="products">
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/accessories-beta-bong.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/accessories-buck-quave-allosaurus-klein.jpg"
              />
              <div className="product__info">
                <div className="product__name">Jet Fuel</div>
                <div className="product__brand">Jungle Boys</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/accessories-regenbogen.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
            <div className="product" onClick={this.showProduct}>
              <img
                className="product__image"
                src="/static/products/accessories-tetra.jpg"
              />
              <div className="product__info">
                <div className="product__name">Sundae Driver</div>
                <div className="product__brand">303 Seeds</div>
                <div className="product__price">$125</div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .hero {
            display: flex;
            width: 100%;
            height: 450px;
            // height: calc(100vh - 100px);
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
            background: #000;
            border-bottom: 1px solid #ccc;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .brands__container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
          .brands__logo {
            max-width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
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

          .products {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
          }

          .product {
            display: flex;
            flex-direction: column;
            width: calc(25% - 1.125rem);
            margin: 2rem 1.5rem 1.5rem 0;
            cursor: pointer;
          }

          .product:last-child {
            margin-right: 0;
          }

          .product__image {
            height: 250px;
            object-fit: cover;
          }

          .product__image:last-child {
            margin: 0;
          }

          .product__info {
            margin: 1rem 0;
          }

          .product__name {
            // color: #fff;
            font-weight: 700;
            margin-bottom: 0.25rem;
          }

          .product__brand {
            // color: #fff;
          }

          .product__price {
            // color: #fff;
            font-weight: 700;
            margin-top: 0.5rem;
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

            .brands__container {
              flex-direction: column;
            }
            .brands__logo {
              margin-bottom: 0.5rem;
            }
            .vid-grid {
              display: none;
            }

            .product {
              width: 100%;
              margin-right: 1rem;
            }

            .product__image {
              height: 150px;
            }
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { toggleCart, viewProduct }
)(Home);
