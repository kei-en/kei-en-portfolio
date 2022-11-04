import React from 'react'
import Image from 'next/image'

export default function Project({ currentProject }) {
    
  return (
    <div className={"flex flex-col"}>
        <div className={"text-center"}>
            <Image src={currentProject.cover} alt='image of project' width={300} height={300} />
        </div>
        <div className={"p-2"}>
            <h3 className={"text-2xl py-2"}>{currentProject.name}</h3>
            <p>{currentProject.description}</p>
        </div>
    </div>
  )
}
