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
              body {
                margin: 0;
              }

              h1,
              h2,
              h3,
              h4,
              h5 {
                font-family: 'Helvetica';
                text-transform: uppercase;
              }

              p,
              a {
                font-family: 'Helvetica';
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

              section {
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding: 2rem;
              }
            `}</style>
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
