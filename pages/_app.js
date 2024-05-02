import { useRouter } from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Get page path to use as key in components
  // so page transitions work between dynamic pages
  // of the same type
  const { asPath } = useRouter();

  return (
    <ParallaxProvider>
      <AnimatePresence
        mode="wait"
        onExitComplete={() =>
          typeof window !== 'undefined' && window.scrollTo(0, 0)
        }
      >
        <Component {...pageProps} key={asPath} />
      </AnimatePresence>
    </ParallaxProvider>
  );
}

export default MyApp;
