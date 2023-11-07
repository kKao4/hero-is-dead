import { RevealWrapper } from "next-reveal";

export default function NormalRevealWrapper({ children }: { children: React.ReactNode }) {
  return (
    <RevealWrapper className="load-hidden" distance="32px" duration={800} origin="bottom" easing="ease-out" delay={100} viewOffset={{
      top: 0,
      right: 0,
      bottom: 180,
      left: 0,
    }}>
      {children}
    </RevealWrapper>
  )
}