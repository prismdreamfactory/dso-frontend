import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <div id="main">
            <Component {...pageProps} />

            {/* <div className="transition__video">
              <video ref="video" src="/static/fill-screen.mp4" muted />
            </div> */}

            <style jsx global>{`
              @font-face {
                font-family: 'Garamond Bold';
                src: url('/static/fonts/Garamonb.eot');
                src: url('/static/fonts/Garamonb.eot?#iefix')
                    format('embedded-opentype'),
                  url('/static/fonts/Garamonb.woff2') format('woff2'),
                  url('/static/fonts/Garamonb.woff') format('woff'),
                  url('/static/fonts/Garamonb.ttf') format('truetype'),
                  url('/static/fonts/Garamonb.svg#svgFontName') format('svg');
              }

              .transition__video {
                mix-blend-mode: screen;
                position: fixed;
                top: 0;
                left: 0;
                pointer-events: none;
                width: 100vw;
                height: 100vh;
              }
              .transition__video video {
                z-index: 3;
                position: absolute;
                top: 0;
                left: -10%;
                width: 120%;
                // visibility: hidden;
              }

              #main {
                background-image: url(https://stylehouserentals.com/wp-content/uploads/2018/11/white-marble-2.jpg);
              }

              body {
                margin: 0;
                font-family: 'Source Sans Pro';
              }

              .logo {
                font-family: 'Garamond Bold';
              }

              h1,
              h2,
              h3,
              h4,
              h5 {
                // font-family: 'Garamond Bold';
                letter-spacing: 0.05em;
                text-transform: uppercase;
                -webkit-font-smoothing: antialiased;
              }

              p {
                line-height: 1.6;
              }

              p,
              a,
              button {
                font-family: 'Source Sans Pro';
              }

              ul,
              ol {
                margin: 0;
                padding: 0;
                list-style: none;
              }

              a {
                color: #000;
                text-decoration: none;
              }

              a,
              button {
                border: none;
                background-color: transparent;
                cursor: pointer;
                color: inherit;
                text-decoration: none;
                padding: 0;
                outline: 0;
              }

              img {
                width: 100%;
              }

              section {
                display: flex;
                justify-content: center;
                flex-direction: column;
                max-width: 75rem;
                width: 100%;
                margin: 2rem auto;
              }

              .section__title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                // margin: 1.875rem 0 0 0;
              }
              .section__title h2 {
                font-family: 'Garamond Bold';
                font-size: 2.1rem;
                margin: 0;
              }
              .section__title p {
                margin: 0;
              }
              .section__title--more {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
              }

              .strain--indica {
                color: rgb(110, 51, 94);
              }
              .strain--sativa {
                color: rgb(212, 71, 39);
              }
              .strain--hybrid {
                color: rgb(118, 189, 29);
              }
            `}</style>
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
