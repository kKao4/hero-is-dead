export default function RowCast({ character, cast, children }: { character: string, cast: string, children?: React.ReactNode }) {
  return (
    <div className="col-span-1 mb-4 md:px-6 last-of-type:mb-0">
      <p className="text-lg font-medium capitalize text-third-brown md:text-xl">{character}</p>
      <div className="flex flex-row items-center capitalize gap-x-4">
        <p className="text-xl md:text-2xl">{cast}</p>
        {children}
      </div>
    </div>
  )
}