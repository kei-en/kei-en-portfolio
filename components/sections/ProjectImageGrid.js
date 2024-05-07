import { motion } from 'framer-motion';
import Image from 'next/image';

import useAnimateIn from '../../hooks/useAnimateIn';
import SiteGrid from '../SiteGrid';

export default function ProjectImageGrid({ data }) {
  // Copy animation
  const {
    ref: copyRef,
    ctrls: copyCtrls,
    vars: copyVars,
  } = useAnimateIn({
    threshold: 0.5,
  });

  // Items animation
  const {
    ref: itemsRef,
    ctrls: itemsCtrls,
    vars: itemsVars,
  } = useAnimateIn({
    threshold: 0.25,
  });

  return (
    <section className="my-40">
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
        </motion.div>
        <motion.div
          className="flex flex-wrap col-span-full justify-center"
          ref={itemsRef}
          initial="hidden"
          animate={itemsCtrls}
          variants={itemsVars}
        >
          {data.items.map((item, index) => (
            <div
              columns={data.columns}
              key={index}
              className={
                'min-w-[calc(100%_/_3)] text-center p-2 ' +
                `w-[calc(100%_/_${data.columns})]` +
                ' md:min-w-[25%] p-4 lg:min-w-[20%]'
              }
            >
              <div
                size={data.image_size}
                className={
                  'mx-auto mb-4 relative w-full ' +
                  (data.image_size === 'small' ? 'h-16' : 'h-auto') +
                  (data.image_size === 'medium' ? 'h-32' : 'h-auto')
                }
              >
                {item.image && item.image.includes('.svg') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.image_is_decorative ? '' : item.image_alt}
                    className={
                      (data.image_size === 'small'
                        ? 'max-h-16'
                        : 'max-h-auto') +
                      (data.image_size === 'medium' ? 'max-h-32' : 'max-h-auto')
                    }
                  />
                ) : (
                  item.image && (
                    <Image
                      src={item.image}
                      blurDataURL={`${item.image}?w=10`}
                      alt={item.image_is_decorative ? '' : item.image_alt}
                      height={item.image_dimensions.height}
                      layout="responsive"
                      objectFit="contain"
                      quality="100"
                      placeholder="blur"
                      width={item.image_dimensions.width}
                    />
                  )
                )}
              </div>
              {item.include_name && (
                <h3 className="mb-[0.5em] text-base font-normal">
                  {item.name}
                </h3>
              )}
              {item.include_copy && (
                <p className="text-sm leading-normal opacity-50">{item.copy}</p>
              )}
            </div>
          ))}
        </motion.div>
      </SiteGrid>
    </section>
  );
}
