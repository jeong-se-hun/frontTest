import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="backdrop-root" />
        <div id="overlay-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
