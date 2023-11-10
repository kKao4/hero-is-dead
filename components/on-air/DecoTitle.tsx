import Image from "next/image"
import decoLeft from "@/assets/deco_side_left.svg"
import decoRight from "@/assets/deco_side_right.svg"

export default function DecoTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center mx-auto w-fit gap-x-4">
      <Image src={decoLeft} className="h-9 w-fit" alt="deco-left" />
      {children}
      <Image src={decoRight} className="-ml-4 h-9 w-fit" alt="deco-right" />
    </div>
  )
}