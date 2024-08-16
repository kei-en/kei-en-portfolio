import { motion } from 'framer-motion';

import useAnimateIn from '../../hooks/useAnimateIn';

import SiteGrid from '../SiteGrid';
import CallToAction from '../CallToAction';

export default function ProjectText({ data }) {
  // Copy animation
  const {
    ref: copyRef,
    ctrls: copyCtrls,
    vars: copyVars,
  } = useAnimateIn({
    threshold: 0.5,
  });

  return (
    <SiteGrid>
      <motion.div
        className="col-span-full my-[var(--padding-lg)] mx-auto max-w-xl w-full"
        ref={copyRef}
        initial="hidden"
        animate={copyCtrls}
        variants={copyVars}
      >
        <h2 className="text-3xl font-semibold tracking-tighter mb-[0.5em] md:text-4xl lg:text-5xl">
          {data.heading}
        </h2>
        <p className="leading-relaxed">{data.copy}</p>
        {data.include_cta !== 'none' && (
          <CallToAction
            internalType={
              data.include_cta === 'internal' ? data.link_internal_type : null
            }
            link={
              data.include_cta === 'internal'
                ? data.link_internal
                : data.include_cta === 'file'
                ? data.link_file
                : data.link_external
            }
            text={data.cta_text}
            type={data.include_cta}
          />
        )}
      </motion.div>
    </SiteGrid>
  );
}
