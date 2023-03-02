/* eslint-disable @next/next/no-sync-scripts */
import Layout from '@/components/layout/Layout';
import type { AppProps } from 'next/app';
import '/src/style/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
