/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import About from '../components/about';
import Contact from '../components/contact';
import Projects from '../components/projects';
import { InView } from 'react-intersection-observer';
import Intro from '../components/Intro';

const pageLink = process.env.OVERVIEW_JSON;

export async function getStaticProps() {
  try {
    const homePageData = await fetch(pageLink).then((response) => {
      return response.json();
    });
    return {
      props: {
        pageData: homePageData.props.pageProps.pageData,
        pageContent: homePageData.props.pageProps.pageContent,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return {
      props: {
        pageData: null,
        error: error.message,
      },
    };
  }
}

export default function Home({ pageData, pageContent }) {
  return (
    <div className={'w-full'}>
      <Head>
        <title>Karanja J. Njuguna</title>
        <meta
          name="description"
          content="My name's Karanja, and I'm passionate about modern web development and digital design – welcome to my portfolio!"
        />
        <meta name="og:title" content="Karanja J. Njuguna" key="ogtitle" />
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
            className="font-space_mono bg-black text-white overscroll-y-auto overscroll-x-none"
          >
            <Intro key="intro" inView={inView} />
            <Projects
              key="projects"
              inView={inView}
              projectQuery={pageContent[1].projects_list}
            />
            <About key="about" inView={inView} />
            <Contact key="contact" inView={inView} />
          </main>
        )}
      </InView>
    </div>
  );
}
