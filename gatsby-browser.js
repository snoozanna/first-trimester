import React from 'react';
import Layout from './src/components/Layout';
import { AccessProvider } from './src/context/access.context';
import { MenuProvider } from './src/context/menu.context';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <MenuProvider>
    <AccessProvider>{element}</AccessProvider>
  </MenuProvider>
);
