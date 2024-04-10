import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preload" href="/Nabi.ttf" as="font" type="font/ttf"></link>

      <meta name="application-name" content="نماز حرز" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="نماز حرز" />
      <meta name="description" content="نماز حرز" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#a7944b" />

      <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/icons/icon-512x512.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
