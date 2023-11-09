import { RevealWrapper } from "next-reveal";

export default function NormalRevealWrapper({ children, className, bottom }: { children: React.ReactNode, className?: string, bottom?: number }) {
  return (
    <RevealWrapper className={"load-hidden " + className} distance="32px" duration={800} origin="bottom" easing="ease-out" delay={100} viewOffset={{
      top: 0,
      right: 0,
      bottom: bottom ?? 180,
      left: 0,
    }}>
      {children}
    </RevealWrapper>
  )
}