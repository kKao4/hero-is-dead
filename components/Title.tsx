export default function Title({ children }: { children?: React.ReactNode }) {
  return (
    <div className={`flex flex-row items-end gap-x-1.5 md:gap-x-2.5 mb-5 md:mb-8`}>
      <div className={`w-2.5 h-2.5 rotate-45 border-black border-3 shrink-0 ${children ? "mb-4 md:mb-9.5" : "-mb-1"}`} />
      {children ? (
        <>
          <div className={`grow border-t border-1.5 border-gray-700 mb-5 md:mb-10`} />
          <div className="">
            {children}
          </div>
          <div className="grow border-t border-1.5 border-gray-700 mb-5 md:mb-10 -ml-4" />
        </>
      ) : (
        <div className={`grow border-t border-1.5 border-gray-700`} />
      )}
      <div className={`w-2.5 h-2.5 rotate-45 border-black border-3 shrink-0 ${children ? "mb-4 md:mb-9.5" : "-mb-1"}`} />
    </div>
  )
}