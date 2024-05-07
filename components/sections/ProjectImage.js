import { motion } from 'framer-motion';
import Image from 'next/image';

import useAnimateIn from '../../hooks/useAnimateIn';

import SiteGrid from '../SiteGrid';

import CallToAction from '../CallToAction';
import ResponsiveImagePreview from '../ResponsiveImagePreview';

export default function ProjectImage({ data }) {
  // Image animation
  const {
    ref: imageRef,
    ctrls: imageCtrls,
    vars: imageVars,
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
            ref={copyRef}
            initial="hidden"
            animate={copyCtrls}
            variants={copyVars}
            className="col-span-full my-[var(--padding-lg)] mx-auto max-w-2xl w-full"
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
      {data.image_size !== 'full' ? (
        <SiteGrid>
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageCtrls}
            variants={imageVars}
            size={data.image_size}
            className={
              'relative ' +
              (data.image_size === 'small'
                ? 'col-[5_/_-5] '
                : data.image_size === 'medium'
                ? 'col-[3_/_-3] '
                : data.image_size === 'large' && 'col-span-full ') +
              (data.image_size === 'small'
                ? 'md:col-[7_/_-7]'
                : data.image_size === 'medium' && 'md:col-[4_/_-4]')
            }
          >
            <ResponsiveImagePreview data={data} />
          </motion.div>
        </SiteGrid>
      ) : (
        <motion.div
          className={
            'relative ' +
            (data.image_size === 'small'
              ? 'col-[5_/_-5] '
              : data.image_size === 'medium'
              ? 'col-[3_/_-3] '
              : data.image_size === 'large' && 'col-span-full ') +
            (data.image_size === 'small'
              ? 'md:col-[7_/_-7]'
              : data.image_size === 'medium' && 'md:col-[4_/_-4]')
          }
        >
          <ResponsiveImagePreview data={data} />
        </motion.div>
      )}
      {data.include_caption && (
        <SiteGrid>
          <div
            position={data.caption_position}
            className={
              'text-sm col-span-full leading-normal ml-auto mr-auto mt-4 max-w-lg opacity-50 text-center ' +
              (data.copy_position === 'right'
                ? 'md:mr-0 '
                : data.copy_position === 'left'
                ? 'md:ml-0 '
                : 'md:mr-auto md:ml-auto ') +
              `md:text${data.copy_position}`
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
            ref={copyRef}
            initial="hidden"
            animate={copyCtrls}
            variants={copyVars}
            className="col-span-full my-[var(--padding-lg)] mx-auto max-w-2xl w-full"
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
