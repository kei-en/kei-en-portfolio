import Image from 'next/image';
import React from 'react';
import { TiArrowDownThick } from 'react-icons/ti';

export default function Intro() {
  return (
    <div className={"h-screen bg-black text-white flex flex-col justify-around align-middle"}>
        <h1 className={'font-monoton text-5xl text-center pt-16'}>Njuguna Karanja</h1>
        <div className={"text-center"}>
          <Image className={"rounded-full"} src='/joe1.jpg' alt='Image: Kei En' width={250} height={250} />
        </div>
        <h3 className={"font-audiowide text-center text-2xl"}>web developer & designer</h3>
        <div className={"flex justify-center"}>
          <TiArrowDownThick size={42}/> 
          <h2 className={"text-gray-400 text-sm"}>more about me</h2>
        </div>
    </div>
  )
}
