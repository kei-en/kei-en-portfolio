import Image from 'next/image';
import React from 'react';

export default function Intro() {
  return (
    <div>
        <h1 className={'font-monoton'}>Njuguna Karanja</h1>
        <div>
          <Image src='/joe1.jpg' alt='Image: Kei En' width={500} height={500} />
        </div>
        <h3 className={"font-audiowide"}>web developer & designer</h3>
    </div>
  )
}
