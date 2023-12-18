import Image from "next/image"

export default function Comic({ img, volume, href }: { img: any, volume: string, href: string }) {
  return (
    <div className="col-span-1 space-y-1 cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-out" onClick={() => window.open(href, "_blank")}>
      <Image src={img} alt={`Volume ${volume}`} priority={false} quality={75} placeholder="blur" />
      <p className="font-vn text-center font-bold text-lg">Tập {volume}</p>
    </div>
  )
}