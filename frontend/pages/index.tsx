import Head from "next/head";
import Script from "next/script";
import HomePage from "./Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Catalogo de Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*      bootstrap script */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
      <HomePage />
    </>
  );
}