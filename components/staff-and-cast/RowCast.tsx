export default function RowCast({ character, voiceActor, children }: { character: string, voiceActor: string, children?: React.ReactNode }) {
  return (
    <div className="col-span-1 md:px-6 mb-4 last-of-type:mb-0">
      <p className="text-third-brown font-medium text-lg md:text-xl capitalize">{character}</p>
      <div className="flex flex-row gap-x-4 items-center capitalize">
        <p className="text-xl md:text-2xl">{voiceActor}</p>
        {children}
      </div>
    </div>
  )
}