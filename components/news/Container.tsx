export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-full sm:max-w-[1160px] px-4 lg:px-14 xl:px-0 pt-12 mx-auto">
      {children}
    </div>
  )
}