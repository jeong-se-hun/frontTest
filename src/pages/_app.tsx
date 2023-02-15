import Layout from '@/components/layout/Layout';
import type { AppProps } from 'next/app';
import '/src/style/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
