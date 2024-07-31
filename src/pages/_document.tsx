import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image" href="/YoungChun.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>영춘기</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
