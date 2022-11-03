import Head from 'next/head';
import About from '../components/about';
import Intro from '../components/intro';

export default function Home() {
  return (
    <div className={"w-full"}>
      <Head>
        <title>Kei En</title>
        <meta name="description" content="Portfolio website for Kei En" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"font-audiowide bg-black text-white"}>
        <Intro />
        <About />
      </main>
    </div>
  )
}
