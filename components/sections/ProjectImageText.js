import { motion } from 'framer-motion';
import Image from 'next/image';

import useAnimateIn from '../../hooks/useAnimateIn';

import SiteGrid from '../SiteGrid';

import CallToAction from '../CallToAction';

export default function ProjectImageText({ data }) {
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
      <SiteGrid>
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageCtrls}
          variants={imageVars}
          copy={data.copy_position}
          className={
            'self-center col-span-full h-auto relative ' +
            (data.copy_position === 'right'
              ? 'md:col-[1_/_13]'
              : 'md:col-[13_/_-1]')
          }
        >
          {data.image.includes('.svg') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={data.image}
              alt={data.image_is_decorative ? '' : data.image_alt}
            />
          ) : (
            <Image
              src={data.image}
              blurDataURL={`${data.image}?w=10`}
              alt={data.image_is_decorative ? '' : data.image_alt}
              height={data.image_dimensions.height}
              layout="responsive"
              objectFit="contain"
              quality="100"
              placeholder="blur"
              width={data.image_dimensions.width}
            />
          )}
          {data.include_caption && (
            <div
              copy={data.copy_position}
              className={
                'text-sm col-span-full leading-normal ml-auto mr-auto mt-[var(--padding-md)] max-w-lg opacity-50 text-center ' +
                (data.copy_position === 'right'
                  ? 'md:mr-0 '
                  : data.copy_position === 'left'
                  ? 'md:ml-0 '
                  : 'md:mr-auto md:ml-auto ') +
                (data.copy_position === 'right'
                  ? 'md:text-left'
                  : 'md:text-right')
              }
            >
              <div className="text-xs mb-[0.5em] uppercase">Above</div>
              {data.caption}
            </div>
          )}
        </motion.div>
        <motion.div
          ref={copyRef}
          initial="hidden"
          animate={copyCtrls}
          variants={copyVars}
          position={data.copy_position}
          className={
            'self-center col-span-full my-[var(--padding-lg)] mx-auto max-w-xl w-full ' +
            (data.copy_position === 'left' && '-order-1 ') +
            (data.copy_position === 'right'
              ? 'md:col-[14_/_-1]'
              : 'md:col-[1_/_12]')
          }
        >
          <h2 className="text-3xl font-semibold tracking-tighter mb-[0.5em] md:text-4xl lg:text-5xl">
            {data.copy_heading}
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
    </section>
  );
}
