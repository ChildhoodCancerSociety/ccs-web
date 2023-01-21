import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ height: "100%" }}>
      <Head />
      <body className="h-[100%]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
