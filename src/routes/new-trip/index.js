import React from 'react';
import Layout from '../../components/Layout';
import NewTrip from './NewTrip';

const title = 'Planning a New Trip';

function action() {
  return {
    title,
    component: (
      <Layout>
        <NewTrip />
      </Layout>
    ),
  };
}

export default action;
