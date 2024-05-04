export default function SiteGrid({ children, overflow, relative }) {
  return (
    <div
      className={
        'grid gap-x-2 grid-cols-[repeat(24,_1fr)] mx-auto w-full py-0 px-4 ' +
        (overflow === 'left' && 'ml-0 pl-0 ') +
        (overflow === 'right' && 'mr-0 pr-0 ') +
        (overflow === 'right' || overflow === 'left'
          ? 'max-w-[calc(100%_-_((100%_-_1600px)_/_2))] '
          : 'max-w-[1600px] ') +
        (relative && 'relative')
      }
      overflow={overflow}
      relative={relative}
    >
      {children}
    </div>
  );
}
