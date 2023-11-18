export default function Container({ children, className, maxWidth = "1160px" }: { children: React.ReactNode, className?: string, maxWidth?: string }) {
  return (
    <div className={`px-4 lg:px-14 xl:px-0 pt-12 mx-auto ${className}`} style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  )
}