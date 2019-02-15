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
            <style jsx global>{`
              #main {
              }

              body {
                margin: 0;
                font-family: 'Raleway';
              }

              .logo {
                font-family: 'Playfair Display';
              }

              h1,
              h2,
              h3,
              h4,
              h5 {
                // font-family: 'Playfair Display';
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
                font-family: 'Raleway';
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
                margin: 0 auto;
              }

              .section__title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                margin: 1.875rem 0 0 0;
              }
              .section__title h2 {
                font-family: 'Playfair Display';
                margin-bottom: 0;
              }
            `}</style>
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
