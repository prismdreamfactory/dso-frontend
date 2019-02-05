import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';

class Index extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(Index);
