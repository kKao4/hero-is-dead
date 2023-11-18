import { RevealWrapper } from "next-reveal";

export default function MenuRevealWrapper({ children }: { children: React.ReactNode }) {
  return (
    <RevealWrapper className="load-hidden" distance="24px" duration={800} easing="ease-out" delay={200}>
      {children}
    </RevealWrapper>
  )
}