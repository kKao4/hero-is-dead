export default function RowStaff({ leftContent, rightContent, children }: { leftContent: string, rightContent: string, children?: React.ReactNode }) {
  return (
    <>
      <p className="col-span-1 md:text-lg font-medium text-third-brown lg:px-6">{leftContent}</p>
      <div className="col-span-2 mb-4 last-of-type:mb-0">
        <p className="text-xl md:text-2xl font-bold mb-1 inline">{rightContent}</p>
        {children}
      </div>
    </>
  )
}