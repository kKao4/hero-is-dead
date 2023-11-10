export default function TvRow({ first, second, third }: { first: string, second: string, third: string }) {
  return (
    <div className="flex flex-row w-full text-lg gap-x-4">
      <div className="basis-1/5 text-start">
        <p className="text-xl font-extrabold">{first}</p>
      </div>
      <div className="basis-1/2">
        <p className="col-span-2 font-semibold">{second}</p>
      </div>
      <div className="basis-auto">
        <p className="font-semibold">{third}</p>
      </div>
    </div>
  )
}