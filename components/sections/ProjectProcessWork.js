import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import SiteGrid from '../SiteGrid';
import CallToAction from '../CallToAction';

export default function ProjectProcessWork({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      onSelect();
    }
  }, [emblaApi]);

  return (
    <section className="my-40">
      <SiteGrid>
        <div className="[grid-column:4_/_-4] max-w-2xl mb-[var(--padding-lg)]">
          <h2 className="text-3xl font-semibold tracking-tighter mb-[0.5em] md:text-4xl lg:text-5xl">
            Process Work
          </h2>
          <p className="leading-relaxed">
            Explore process work for this project.
          </p>
        </div>
      </SiteGrid>
      <SiteGrid overflow="right">
        <div className="bg-[rgba(0,0,0,0.25)] col-span-full w-full">
          <div className="relative">
            <div
              className="overflow-hidden is-draggable is-dragging"
              ref={emblaRef}
            >
              <div className="flex will-change-transform">
                {data.items.map((item, index) => (
                  <div
                    className="[flex:_0_0_auto] max-w-3xl w-full"
                    key={index}
                  >
                    <div className="grid gap-x-2 [grid-template-columns:_repeat(24,_1fr)] py-[var(--padding-lg)] px-0">
                      <div className="col-span-full mt-0 mr-[var(--padding-lg)] mb-[var(--padding-md)] ml-[var(--padding-lg)] relative">
                        {item.image.includes('.svg') ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.image}
                            alt={item.image_is_decorative ? '' : item.image_alt}
                          />
                        ) : (
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
                        )}
                      </div>
                      <h3 className="text-2xl font-semibold col-span-full tracking-tighter mt-0 mx-[var(--padding-lg)] mb-[0.5em] max-w-2xl">
                        {item.heading}
                      </h3>
                      <p className="col-span-full leading-relaxed my-0 mx-[var(--padding-lg)] max-w-2xl">
                        {item.copy}
                      </p>
                      {item.include_cta !== 'none' && (
                        <div className="col-span-full mt-[var(--padding-sm)] mx-[var(--padding-lg)] mb-0">
                          <CallToAction
                            internalType={
                              item.include_cta === 'internal'
                                ? item.link_internal_type
                                : null
                            }
                            link={
                              item.include_cta === 'internal'
                                ? item.link_internal
                                : item.include_cta === 'file'
                                ? item.link_file
                                : item.link_external
                            }
                            text={item.cta_text}
                            type={item.include_cta}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center col-span-full justify-end pt-0 pr-[var(--padding-lg)] pb-[var(--padding-lg)] pl-[var(--padding-lg)]">
            <button
              className="bg-none border-none text-white cursor-pointer h-10 outline-none p-0 transition-opacity duration-300 ease-[var(--ease-out)] w-10 disabled:cursor-not-allowed disabled:opacity-25 mr-4"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <svg
                alt="Previous Slide"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 5 12 12 19"></polyline>
              </svg>
            </button>
            <button
              className="bg-none border-none text-white cursor-pointer h-10 outline-none p-0 transition-opacity duration-300 ease-[var(--ease-out)] w-10 disabled:cursor-not-allowed disabled:opacity-25"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <svg
                alt="Next Slide"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </SiteGrid>
    </section>
  );
}
