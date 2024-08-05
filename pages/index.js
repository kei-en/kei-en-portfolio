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
        <title>Kei eN</title>
        <meta
          name="description"
          content="Portfolio website for Karanja J. Njuguna"
        />
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
          <main
            ref={ref}
            className="font-space_mono bg-black text-white overscroll-auto"
          >
            <Intro key="intro" inView={inView} />
            <About key="about" inView={inView} />
            <Projects key="projects" inView={inView} />
            <Contact key="contact" inView={inView} />
          </main>
        )}
      </InView>
    </div>
  );
}
