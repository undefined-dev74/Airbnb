import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
        />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  );
}
