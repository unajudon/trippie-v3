// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trippie Quiz</title>
        <meta name="description" content="Find your Trippie kind 🌍✨" />
        <link rel="icon" href="/images/favicon.jpeg" type="image/jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}