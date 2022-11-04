import Image from 'next/image'
import React from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'

export default function Projects() {
  return (
    <div className={"bg-white text-black w-[90%] m-auto p-2 rounded-lg"}>
        <h2 className={"font-monoton text-center text-3xl p-4"}>Projects</h2>
        <div className={"flex flex-col"}>
            <div className={"text-center"}>
                <Image src='/sunnyside.png' alt='image of project' width={300} height={300} />
            </div>
            <div className={"p-2"}>
                <h3 className={"text-2xl py-2"}>Sunnyside</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor laborum dicta voluptates officia aspernatur modi nisi, consequatur voluptatum alias adipisci aliquam temporibus minima id quasi mollitia deserunt enim? Labore facilis cupiditate quos vero sunt tempore! Vitae quas et quisquam perspiciatis, quaerat error iste repudiandae id obcaecati eveniet nobis quod.</p>
            </div>
        </div>
        <div className={"flex justify-between"}>
            <button><TiArrowLeftThick size={28} /> prev project</button>
            <button><TiArrowRightThick size={28} /> next project</button>
        </div>
    </div>
  )
}
