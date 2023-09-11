import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo';
import {Layout} from '../components'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
  )
}
