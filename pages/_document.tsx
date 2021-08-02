import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/assets/brand/favicon.ico" />
          <script
            async
            src="https://cdn.transcend.io/cm/7d98936a-971d-4731-b092-b547a84ab516/airgap.js"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="preload"
            href="/static/assets/webfonts/Inter.var.woff2?v=3.15"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
