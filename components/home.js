import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../microcomponents/button';
import { Link as ScrollLink, Element } from 'react-scroll';
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
            <div className="hero__video">
              {/* <iframe
                src="https://www.youtube.com/embed/zUsNyFwPtAQ?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              /> */}
              {/* <iframe
                width="1872"
                height="729"
                src="https://www.youtube.com/embed/XM2fpUQTLds?autoplay=1&loop=1&mute=1&rel=0&showinfo=0&controls=0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              /> */}
              <video
                className="hero__video"
                src="/static/hero.mp4"
                autoPlay
                loop
                muted
              />
            </div>

            <section className="hero__description">
              <h3>High-end strains delivered to you</h3>
              <p>
                Get a curated box monthly filled with certified DSO-grade
                cannabis products delivered to you.
              </p>
              <ScrollLink
                activeClass="active"
                to="subscribe"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Button label="Subscribe" />
              </ScrollLink>
            </section>
          </div>
        </div>

        <div className="brands">
          <div className="brands__container">
            <div className="brands__logo">
              <img src="/static/logo-jetfuel.jpg" />
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

        <section id="subscribe">
          <Element name="subscribe">
            <div className="section__title">
              <h2>Monthly Subscription Box</h2>
              <p>DSO Grade Strains Delivered Direct to Your Door</p>
            </div>
          </Element>

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

        <div className="section section--flower">
          <section>
            <div className="section__title section__title--more">
              <div>
                <h2>Flower</h2>
                <p>
                  The highest-quality bud. Grind it up, roll it, or pack into
                  your preferred smoking device.
                </p>
              </div>
              <div>
                <Button label="See More" href="/collection/flower" />
              </div>
            </div>

            <div className="products">
              <div className="product" onClick={this.showProduct}>
                {/* <img
                  className="product__image"
                  src="/static/products/concentrate-gotexcellence.jpg"
                /> */}
                <video src="/static/video-02.mp4" autoPlay muted loop={true} />

                <div className="product__info">
                  <div className="product__name strain--indica">Cherry Pie</div>
                  <div className="product__brand">Got Excellence</div>
                  <div className="product__price">$125</div>
                </div>
              </div>
              <div className="product" onClick={this.showProduct}>
                {/* <img className="product__image" src="/static/product-01.jpg" /> */}
                <video src="/static/video-03.mp4" autoPlay muted loop={true} />
                <div className="product__info">
                  <div className="product__name strain--hybrid">Jet Fuel</div>
                  <div className="product__brand">Jungle Boys</div>
                  <div className="product__price">$125</div>
                </div>
              </div>
              <div className="product" onClick={this.showProduct}>
                {/* <img
                  className="product__image"
                  src="/static/products/concentrate-queenofhearts.jpg"
                /> */}
                <video src="/static/video-01.mp4" autoPlay muted loop={true} />
                <div className="product__info">
                  <div className="product__name strain--sativa">
                    Gorilla Glue
                  </div>
                  <div className="product__brand">420 Queen of Hearts</div>
                  <div className="product__price">$125</div>
                </div>
              </div>
              <div className="product" onClick={this.showProduct}>
                {/* <img className="product__image" src="/static/curt-ice-01.jpg" /> */}
                <video
                  src="/static/360-video-03.mp4"
                  autoPlay
                  muted
                  loop={true}
                />
                <div className="product__info">
                  <div className="product__name strain--indica">
                    Sundae Driver
                  </div>
                  <div className="product__brand">Jungle Boys</div>
                  <div className="product__price">$125</div>
                </div>
              </div>
              <div className="product" onClick={this.showProduct}>
                {/* <img className="product__image" src="/static/curt-ice-01.jpg" /> */}
                <video src="/static/video-02.mp4" autoPlay muted loop={true} />
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
        </div>

        <div className="section section--concentrate">
          <section>
            <div className="section__title section__title--more">
              <div>
                <h2>Concentrates</h2>
                <p>
                  Highly potent cannabis extracts — favored by advanced
                  customers.
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
                  src="/static/products/concentrate-queenofhearts.jpg"
                />
                <div className="product__info">
                  <div className="product__name strain--sativa">
                    Gorilla Glue
                  </div>
                  <div className="product__brand">420 Queen of Hearts</div>
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
            </div>
          </section>
        </div>

        <div className="section section--edibles">
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
              <div className="product" onClick={this.showProduct}>
                <img
                  className="product__image"
                  src="/static/products/edibles-02.jpg"
                />
                <div className="product__info">
                  <div className="product__name">Sundae Driver</div>
                  <div className="product__brand">303 Seeds</div>
                  <div className="product__price">$125</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="section section--vape">
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
              <div className="product" onClick={this.showProduct}>
                <img
                  className="product__image"
                  src="/static/products/vape-honey.jpg"
                />
                <div className="product__info">
                  <div className="product__name">Honey</div>
                  <div className="product__brand">303 Seeds</div>
                  <div className="product__price">$125</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="section section--cbd">
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
                  src="/static/products/cbd-select-drops-lemon.jpg"
                />
                <div className="product__info">
                  <div className="product__name">Sundae Driver</div>
                  <div className="product__brand">Medterra</div>
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
        </div>

        <div className="section section--accessories">
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
              <div className="product" onClick={this.showProduct}>
                <img
                  className="product__image"
                  src="/static/products/accessories-mobius-bong.jpg"
                />
                <div className="product__info">
                  <div className="product__name">Mobius Bong</div>
                  <div className="product__brand">Mobius</div>
                  <div className="product__price">$125</div>
                </div>
              </div>
            </div>
          </section>
        </div>

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
            background-color: #000;
            // background-image: url(https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80);
            // display: flex;
            // justify-content: center;
            overflow: hidden;
          }

          .hero__video {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            max-width: 100%;
          }

          .hero__video iframe,
          .hero__video video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 0;
            object-fit: cover;
          }

          .hero__description {
            top: 0;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            max-width: 40%;
          }

          .brands {
            width: 100%;
            background: #000;
            // background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSMZltP8Uqj6dXkjARjfEUoh_KM5LvbFZA7XP25p5XA_2u8lbaQ);
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
            width: 100%;
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

          .section {
            background-size: cover;
          }

          .section--flower {
            // background: url(https://images.unsplash.com/photo-1528372531841-f1228963b0af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80);
          }

          .section--edibles {
            // background: url(https://stylehouserentals.com/wp-content/uploads/2018/11/white-marble-2.jpg);
          }

          .section--cbd {
            // background: url(/static/snake-01.jpg);
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
