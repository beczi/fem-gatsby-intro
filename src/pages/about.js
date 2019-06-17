import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>This is my personal space.</p>
    <Link to="/">back to home</Link>
  </Layout>
);