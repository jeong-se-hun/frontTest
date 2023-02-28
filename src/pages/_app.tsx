import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import "/src/style/global.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <MemberContextProvider>
    <Layout>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
      <Component {...pageProps} />
    </Layout>
    // </MemberContextProvider>
  );
}
