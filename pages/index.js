import Head from 'next/head';
import Intro from '../components/intro';

export default function Home() {
  return (
    <div className={"w-full"}>
      <Head>
        <title>Kei En</title>
        <meta name="description" content="Portfolio website for Kei En" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"bg-gray-400"}>
        <Intro />
      </main>
    </div>
  )
}
