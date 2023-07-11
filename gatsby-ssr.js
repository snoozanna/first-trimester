import React from 'react';
import { MenuProvider } from './src/context/menu.context';
import Layout from './src/components/Layout';
import { AccessProvider } from './src/context/access.context';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <MenuProvider>
    <AccessProvider>{element}</AccessProvider>
  </MenuProvider>
);
