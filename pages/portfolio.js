import Head from 'next/head';
import Layout from '../components/Layout';
import HeroProject from '../components/HeroProject';
import ContentMapper from '../components/ContentMapper';

const pageLink = process.env.PORTFOLIO_JSON;

export async function getStaticProps() {
  try {
    const data = await fetch(pageLink).then((response) => {
      return response.json();
    });
    return {
      props: {
        projectData: data,
      },
    };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return {
      props: {
        projectData: null,
        error: error.message,
      },
    };
  }
}

export default function Portfolio({ projectData }) {
  return (
    <>
      <Head>
        <title>Design projects</title>
        <meta
          name="description"
          content="List and description of design projects Karanja has been involved in"
        />
        <meta property="og:title" content="Design projects" key="ogtitle" />
        <meta
          property="og:description"
          content="List and description of design projects Karanja has been involved in"
          key="ogdesc"
        />
        <meta
          property="og:site_name"
          content="Karanja J. Njuguna"
          key="ogsitename"
        />
        <meta property="og:image" content="/kei-en-logo.png" key="ogimage" />
        <meta property="og:url" content="https://k7n.tech" key="ogtitle" />
        <link rel="icon" href="/favicon.ico" key="" />
      </Head>
      <Layout background="#F7F9FF" text="#000">
        <HeroProject data={projectData} />
        <ContentMapper sections={projectData.content} />
      </Layout>
    </>
  );
}
