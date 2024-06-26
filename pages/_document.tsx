import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f4f4f5" />
        <meta name="msapplication-TileColor" content="#f4f4f5" />
        <meta name="theme-color" content="#f4f4f5" />
      </Head>
      <body>
        <div className="bg-zinc-50">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
