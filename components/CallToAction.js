import Link from 'next/link';

export default function CallToAction({ internalType, link, text, type }) {
  return (
    <>
      {type === 'internal' && (
        <Link
          href={
            internalType === 'project'
              ? `/projects/${link}`
              : internalType === 'article'
              ? `/articles/${link}`
              : `/${link === 'homepage' ? '' : link}`
          }
          passHref
          scroll={false}
        >
          <a className="items-center cursor-pointer flex mt-[var(--padding-sm)] opacity-50 transition-opacity duration-300 ease-[var(--ease-out)] hover:opacity-100">
            {text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 ml-2 w-6"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </Link>
      )}
      {type === 'file' && (
        <a
          className="items-center cursor-pointer flex mt-[var(--padding-sm)] opacity-50 transition-opacity duration-300 ease-out hover:opacity-100"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
          <svg
            className="h-6 ml-2 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 ml-2 w-6"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      )}
      {type === 'external' && (
        <a
          className="items-center cursor-pointer flex mt-[var(--padding-sm)] opacity-50 transition-opacity duration-300 ease-out hover:opacity-100"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 ml-2 w-6"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      )}
    </>
  );
}
