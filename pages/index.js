import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Home from '../components/home';

class Index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(Index);
