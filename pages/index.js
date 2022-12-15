/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import About from '../components/about';
import Contact from '../components/contact';
import Intro from '../components/intro';
import Projects from '../components/projects';
import { InView } from 'react-intersection-observer';

export default function Home() {
  return (
    <div className={'w-full'}>
      <Head>
        <title>Kei En</title>
        <meta name="description" content="Portfolio website for Kei En" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <InView threshold={0.9}>
      {({ ref, inView }) => (
        <main className='font-audiowide bg-black text-white overscroll-auto'>
          <Intro ref={ref} inView={inView} />
          <About ref={ref} inView={inView} />
          <Projects ref={ref} inView={inView} />
          <Contact ref={ref} inView={inView} />
        </main>
        )}
      </InView>
    </div>
  );
}
