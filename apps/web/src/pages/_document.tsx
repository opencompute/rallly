import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
          sizes="any"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="application-name" content="Kinpal" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/mstile.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#F3F4F6" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="portal"></div>
      </body>
    </Html>
  );
}
