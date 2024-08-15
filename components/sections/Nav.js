import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaFolder, FaFolderOpen, FaRegFile } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Nav() {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setActive(true);
    if (active) setActive(false);
  };

  return (
    <div className="fixed bg-gray-100/5 backdrop-blur-sm rounded-md top-4 left-4 right-4 z-50 flex justify-between align-middle pr-6">
      <Link href="/">
        <Image src="/kei-en-logo.png" width={100} height={100} />
      </Link>
      <div className="flex">
        <button onClick={handleClick}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              width="12"
              height="4"
              rx="2"
              fill="white"
              className="hover:fill-honey"
            />
            <rect
              x="4"
              y="14"
              width="12"
              height="4"
              rx="2"
              fill="white"
              className={`${active ? 'fill-honey' : 'fill-white'}`}
            />
            <rect
              y="7"
              width="20"
              height="4"
              rx="2"
              fill="white"
              className="hover:fill-honey"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          active ? '' : 'hidden'
        } absolute right-0 left-0 top-2/3 m-6 bg-white/95 text-black p-4 rounded-md`}
      >
        <Link href="/">
          <p className="flex cursor-pointer hover:underline py-1">
            <FaFolder />
            &nbsp;home
          </p>
        </Link>
        <div>
          <p className="flex py-1">
            <FaFolderOpen />
            &nbsp;projects
          </p>
          <ul className="ml-8">
            <li
              className={`${
                router.pathname === '/projects/chartske'
                  ? 'underline italic'
                  : ''
              } hover:underline cursor-pointer py-1`}
            >
              <Link href="/projects/chartske">
                <p className="flex">
                  <FaRegFile />
                  &nbsp;chartske
                </p>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === '/projects/muimbaji'
                  ? 'underline italic'
                  : ''
              } hover:underline cursor-pointer py-1`}
            >
              <Link href="/projects/muimbaji">
                <p className="flex">
                  <FaRegFile />
                  &nbsp;muimbaji
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
