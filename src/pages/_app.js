import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';

import MainLayout from '@/layouts/main';
import axiosClient from '@/axiosConfig/axiosClient';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const Layout = Component.Layout ?? MainLayout

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{fetcher: url => axiosClient.get(url), shouldRetryOnError: true}}>
          <CssBaseline />
          <Layout>
              <Component {...pageProps} />
          </Layout>
          <Toaster position="top-right" />
        </SWRConfig>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
