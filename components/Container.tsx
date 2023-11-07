export default function Container({ children }: { children: React.ReactNode }) {
  return (
  <div className="max-w-[1160px] px-4 lg:px-14 xl:px-0 pt-4 lg:pt-6 xl:pt-8 mx-auto">
      {children}
    </div>
  )
}