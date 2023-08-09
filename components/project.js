import React from 'react';
import Image from 'next/image';

export default function Project({ currentProject }) {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="text-center flex-1 relative z-10 h-fit">
        <Image
          src={currentProject.cover}
          alt="image of project"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          width={16}
          height={10}
        />
      </div>
      <div className={'p-2 flex-1 z-20 relative'}>
        <h3
          className={
            'text-4xl py-2 font-monoton lg:-ml-14 lg:mt-0 -mt-10 absolute lg:bottom-6'
          }
        >
          {currentProject.name}
        </h3>
        <p className="pt-10">{currentProject.description}</p>
      </div>
    </div>
  );
}
