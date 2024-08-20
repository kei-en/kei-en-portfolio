import { projectQuery } from '../../data';
import Head from 'next/head';

import Layout from '../../components/Layout';
import HeroProject from '../../components/HeroProject';
import ContentMapper from '../../components/ContentMapper';
import Nav from '../../components/sections/Nav';
import Contact from '../../components/contact';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { project: 'chartske' } },
      { params: { project: 'muimbaji' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projectQuery.find((item) => item.project === params.project);

  return {
    props: {
      projectData: project.data,
      projectContent: project.data.content,
    },
    revalidate: 1,
  };
}

export default function ProjectPage({ projectData, projectContent }) {
  return (
    <>
      <Head>
        <title>{projectData.meta_title}</title>
        <meta name="description" content={projectData.meta_description} />
        <meta
          property="og:title"
          content={projectData.meta_title}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={projectData.meta_description}
          key="ogdesc"
        />
        <meta
          property="og:site_name"
          content="Karanja J Njuguna"
          key="ogsitename"
        />
        <meta
          property="og:image"
          content={projectData.meta_image}
          key="ogimage"
        />
        <meta property="og:url" content="https://k7n.tech" key="ogtitle" />
        <link rel="icon" href="/favicon.ico" key="" />
      </Head>
      <Layout
        background={projectData.custom_theme.background.hex}
        text={projectData.custom_theme.text.hex}
      >
        <Nav />
        <HeroProject data={projectData} />
        <ContentMapper sections={projectContent} />
        <Contact />
      </Layout>
    </>
  );
}
