import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import Head from 'next/head';

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Designer Strains Only</title>
          <meta name="title" content="Designer Strains Only" />
          <meta name="description" content="Designer Strains Only" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Nav />

        <style jsx global>{`
          ul,
          ol {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          a {
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(Index);
