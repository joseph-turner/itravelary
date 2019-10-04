import React from 'react';
import Layout from '../../components/Layout';
import Trips from './Trips';

const title = 'List of Trips';

function action() {
  return {
    title,
    component: (
      <Layout>
        <Trips title={title} />
      </Layout>
    ),
  };
}

export default action;
