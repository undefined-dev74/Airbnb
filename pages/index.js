import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
        />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Exlpore Nearby</h2>
          {/* pull some data from a server - from API */}
          {exploreData?.map(item => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res =>
    res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
