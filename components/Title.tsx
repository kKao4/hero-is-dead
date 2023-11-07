export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-x-1.5 md:gap-x-2.5 items-center mb-5 md:mb-8">
      <div className="w-2.5 h-2.5 rotate-45 border-black border-3 shrink-0" />
      <div className="grow border-t border-gray-700" />
      <div className="flex flex-col">
        {children}
      </div>
      <div className="grow border-t border-gray-700" />
      <div className="w-2.5 h-2.5 rotate-45 border-black border-3 shrink-0" />
    </div>
  )
}