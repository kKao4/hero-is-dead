import Image from "next/image"
import decoLeft from "@/assets/deco_side_left.svg"
import decoRight from "@/assets/deco_side_right.svg"

export default function DecoTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center mx-auto w-fit gap-x-2 md:gap-x-4">
      <Image src={decoLeft} className="h-4 md:h-9 w-fit" alt="deco-left" quality={0} priority={false} />
      {children}
      <Image src={decoRight} className="h-4 -ml-2 md:-ml-4 md:h-9 w-fit" alt="deco-right" quality={0} priority={false} />
    </div>
  )
}