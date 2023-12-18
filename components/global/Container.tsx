import { CSSProperties } from "react";

export default function Container({ children, className, style }: { children: React.ReactNode, className?: string, style?: CSSProperties }) {
  return (
    <div className={`px-4 lg:px-14 max-w-[1160px] xl:px-0 pt-12 mx-auto ${className}`} style={style}>
      {children}
    </div>
  )
}