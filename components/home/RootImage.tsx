import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";
import rootImage from "@/assets/visual_04_chara.webp"
import logo from "@/assets/logo_1line.svg"

export default function RootImage() {
  return (
    <>
      <RevealWrapper className="load-hidden" distance="24px" duration={800} easing="ease-out" delay={200}>
        <div className="hidden sm:flex flex-row gap-x-2.5">
          <div className="w-3 h-3 rotate-45 border-gray-500 border-3" />
          <div className="w-full mt-1.5 border-t border-gray-700" />
          <div className="w-3 h-3 rotate-45 border-gray-500 border-3" />
        </div>
      </RevealWrapper>
      <div className="relative -mt-1 overflow-hidden sm:mx-9">
        <RevealWrapper className="load-hidden" scale={1.2} duration={1000} distance="0" easing="ease-out" delay={200}>
          <Image src={rootImage} alt="" priority={true} quality={100} />
        </RevealWrapper>
        <RevealWrapper className="load-hidden" scale={1.2} duration={1000} distance="0" easing="ease-out" delay={200}>
          <Image src={logo} quality={100} alt="" className="absolute scale-90 -translate-x-1/2 bottom-6 sm:bottom-14 xl:bottom-24 title sm:scale-110 lg:scale-125 xl:scale-165 left-1/2" />
        </RevealWrapper>
      </div>
    </>
  )
}