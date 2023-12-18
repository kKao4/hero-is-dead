export default function BoxTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-6 md:py-10 md:pb-20 bg-second-brown">
      <div className="max-w-full sm:max-w-[1090px] px-4 lg:px-14 xl:px-0 mx-auto">
        {children}
      </div>
    </div>
  )
}