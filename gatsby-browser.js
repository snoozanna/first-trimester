import React from 'react';
import Layout from './src/components/Layout';
import { AccessProvider } from './src/context/access.context';
import { MenuProvider } from './src/context/menu.context';
import { FormProvider } from './src/context/form.context';
import { QuestionProvider } from './src/context/question.context';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <MenuProvider>
    <QuestionProvider>
      <FormProvider>
        <AccessProvider>{element}</AccessProvider>
      </FormProvider>
    </QuestionProvider>
  </MenuProvider>
);
