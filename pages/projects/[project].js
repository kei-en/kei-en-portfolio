import { projectQuery } from '../../data';
import Head from 'next/head';

import Layout from '../../components/Layout';
import HeroProject from '../../components/HeroProject';
import ContentMapper from '../../components/ContentMapper';
import Nav from '../../components/sections/Nav';
import Contact from '../../components/contact';

const pageLink = process.env.OVERVIEW_JSON;
const dataLink = process.env.DATA_JSON;

export async function getStaticPaths() {
  try {
    const data = await fetch(pageLink).then((response) => {
      return response.json();
    });
    const slugs = data.props.pageProps.pageContent[1].projects_list;

    return {
      paths: slugs.map((slug) => ({
        params: {
          project: slug.slug,
        },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }

  return {
    ppaths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(dataLink);
    const projectQuery = await response.json();

    const project = projectQuery.projects.find(
      (item) => item.project === params.project
    );

    if (!project) {
      return {
        notFound: true, // This will return a 404 page if the project is not found
      };
    }

    return {
      props: {
        projectData: project,
        projectContent: project.data.content,
      },
    };
  } catch (error) {
    console.error(`Error fetching project data: ${error.message}`);
    return {
      props: {
        projectData: null,
        // projectContent: null,
        error: error.message || 'An unexpected error occurred.',
      },
    };
  }
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
          content="Karanja J. Njuguna"
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
        background={projectData.data.custom_theme.background.hex}
        text={projectData.data.custom_theme.text.hex}
      >
        <Nav />
        <HeroProject data={projectData} />
        <ContentMapper sections={projectContent} />
        <Contact />
      </Layout>
    </>
  );
}
