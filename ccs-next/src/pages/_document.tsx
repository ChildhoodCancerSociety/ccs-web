import { Head, Html, Main, NextScript } from "next/document";

import { Footer, Header } from "ccs@structure";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;300;400;700&family=Signika:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}