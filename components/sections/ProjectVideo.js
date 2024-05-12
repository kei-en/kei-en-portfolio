import styled from 'styled-components';
import { motion } from 'framer-motion';

import useAnimateIn from '../../hooks/useAnimateIn';

import SiteGrid from '../SiteGrid';
import CallToAction from '../CallToAction';

const VideoContainer = styled(motion.div)`
  grid-column: 1 / -1;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  @media (min-width: 800px) {
    grid-column: ${(props) => {
      if (props.size === 'small') {
        return '7 / -7';
      } else if (props.size === 'medium') {
        return '4 / -4';
      }
    }};
  }
`;

const Caption = styled.div`
  font-size: 0.9rem;
  grid-column: 1 / -1;
  line-height: 1.5;
  margin: 0 auto 0 auto;
  margin-top: ${(props) => props.theme.padding.md};
  max-width: 30rem;
  opacity: 0.5;
  text-align: center;

  @media (min-width: 800px) {
    margin-left: ${(props) => (props.position === 'left' ? '0' : 'auto')};
    margin-right: ${(props) => (props.position === 'right' ? '0' : 'auto')};
    text-align: ${(props) => props.position};
  }
`;

export default function ProjectVideo({ data }) {
  // Video animation
  const {
    ref: videoRef,
    ctrls: videoCtrls,
    vars: videoVars,
  } = useAnimateIn({
    threshold: 0.25,
  });

  // Copy animation
  const {
    ref: copyRef,
    ctrls: copyCtrls,
    vars: copyVars,
  } = useAnimateIn({
    threshold: 0.5,
  });

  return (
    <section className="my-40">
      {data.include_copy && data.copy_position === 'above' && (
        <SiteGrid>
          <motion.div
            className="col-span-full my-[var(--padding-lg)] mx-auto max-w-xl w-full"
            ref={copyRef}
            initial="hidden"
            animate={copyCtrls}
            variants={copyVars}
          >
            <h2 className="text-3xl font-semibold tracking-tighter mb-[0.5em] md:text-4xl lg:text-5xl">
              {data.copy_heading}
            </h2>
            <p className="leading-relaxed">{data.copy}</p>
            {data.include_cta !== 'none' && (
              <CallToAction
                internalType={
                  data.include_cta === 'internal'
                    ? data.link_internal_type
                    : null
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
      )}
      <SiteGrid>
        <motion.div
          ref={videoRef}
          initial="hidden"
          animate={videoCtrls}
          variants={videoVars}
          size={data.video_size}
          className={
            'col-span-full h-0 overflow-hidden pb-[56.25%] relative ' +
            (data.video_size === 'small' && 'md:[grid-column:7_/_-7]') +
            (data.video_size === 'medium' && 'md:[grid-column:4_/_-4]')
          }
        >
          <iframe
            className="border-none h-full left-0 absolute top-0 w-full"
            src={`https://player.vimeo.com/video/${data.video}`}
            frameborder="0"
            webkitAllowFullScreen
            mozallowfullscreen
            allowFullScreen
          ></iframe>
        </motion.div>
      </SiteGrid>
      {data.include_caption && (
        <SiteGrid>
          <div
            position={data.caption_position}
            className={
              'text-sm col-span-full leading-normal ml-auto mr-auto mt-4 max-w-md opacity-50 text-center ' +
              (data.caption_position === 'left' ? 'md:ml-0' : 'md:ml-auto') +
              (data.caption_position === 'right' ? 'md:mr-0' : 'md:mr-auto') +
              ` md:text-${data.caption_position}`
            }
          >
            <div className="text-xs mb-[0.5em] uppercase">Above</div>
            {data.caption}
          </div>
        </SiteGrid>
      )}
      {data.include_copy && data.copy_position === 'below' && (
        <SiteGrid>
          <motion.div
            className="col-span-full my-[var(--padding-lg)] mx-auto max-w-xl w-full"
            ref={copyRef}
            initial="hidden"
            animate={copyCtrls}
            variants={copyVars}
          >
            <h2 className="text-3xl font-semibold tracking-tighter mb-[0.5em] md:text-4xl lg:text-5xl">
              {data.copy_heading}
            </h2>
            <p className="leading-relaxed">{data.copy}</p>
            {data.include_cta !== 'none' && (
              <CallToAction
                internalType={
                  data.include_cta === 'internal'
                    ? data.link_internal_type
                    : null
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
      )}
    </section>
  );
}
