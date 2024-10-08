import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ResponsiveImagePreview({ data }) {
  const [device, setDevice] = useState('desktop');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDevice('desktop');
      } else if (width >= 768) {
        setDevice('tablet');
      } else {
        setDevice('mobile');
      }
    };
    setWindowWidth(window.innerWidth > 0 ? window.innerWidth : screen.width);

    updateDevice();
    window.addEventListener('resize', updateDevice);

    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  const imageData = {
    desktop: {
      src: data.devices.desktop.image,
      width: data.devices.desktop.width,
      height: data.devices.desktop.height,
    },
    tablet: {
      src: data.devices.tablet.image,
      width: data.devices.tablet.width,
      height: data.devices.tablet.height,
    },
    mobile: {
      src: data.devices.mobile.image,
      width: data.devices.mobile.width,
      height: data.devices.mobile.height,
    },
    all: {
      src: data.devices.image,
      width: data.devices.width,
      height: data.devices.height,
    },
  };

  const getImageData = () => {
    if (data) {
      if (data.devices.image) {
        return imageData.all;
      } else {
        return imageData[device];
      }
    }
  };

  const { src, width, height } = getImageData();

  return (
    <div className="text-center p-5">
      {src && !data.devices.image && (
        <div className="mb-5 space-x-4">
          <button
            className={`px-4 py-2 border-none text-white ${
              device === 'desktop' ? 'bg-gray-700' : 'bg-gray-500'
            }`}
            onClick={() => setDevice('desktop')}
          >
            Desktop
          </button>
          <button
            className={`px-4 py-2 border-none text-white ${
              device === 'tablet' ? 'bg-gray-700' : 'bg-gray-500'
            }`}
            onClick={() => setDevice('tablet')}
          >
            Tablet
          </button>
          <button
            className={`px-4 py-2 border-none text-white ${
              device === 'mobile' ? 'bg-gray-700' : 'bg-gray-500'
            }`}
            onClick={() => setDevice('mobile')}
          >
            Mobile
          </button>
        </div>
      )}
      <div className="mt-5">
        <div
          className={`
            ${
              windowWidth >= 600
                ? device === 'desktop'
                  ? 'w-4/5'
                  : device === 'tablet'
                  ? 'w-2/5'
                  : 'w-1/5'
                : device === 'mobile' && 'w-3/5'
            } 
            mx-auto`}
        >
          {src && src.includes('.svg') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getImageUrl(data)}
              alt={data.image_is_decorative ? '' : data.image_alt}
            />
          ) : (
            src && (
              <Image
                src={src}
                blurDataURL={`${src}?w=10`}
                alt={data.image_is_decorative ? '' : data.image_alt}
                height={height}
                layout="responsive"
                objectFit="contain"
                quality="100"
                placeholder="blur"
                width={width}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
