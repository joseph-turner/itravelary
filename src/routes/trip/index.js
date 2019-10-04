import React from 'react';
import Layout from '../../components/Layout';
import Trip from './Trip';

const title = 'Planning a Trip';

async function action({ params }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    title,
    component: (
      <Layout>
        <Trip tripId={params.id} />
      </Layout>
    ),
  };
}

export default action;
