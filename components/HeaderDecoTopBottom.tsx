import Image from "next/image"
import decoTop from "@/assets/deco_center_top.svg"
import decoBottom from "@/assets/deco_center_bottom.svg"

export default function HeaderDecoTopBottom({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mx-auto w-fit gap-y-2 md:gap-y-4 items-center">
      <Image src={decoTop} alt="" className="h-10 lg:h-14" quality={0} priority={false} />
      {children}
      <Image src={decoBottom} alt="" className="h-10 lg:h-14" quality={0} priority={false} />
    </div>
  )
}