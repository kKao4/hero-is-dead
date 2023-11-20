import Image from "next/image"

export default function Product({ img, title }: { img: any, title: string }) {
  return (
    <div className="col-span-1">
      <div className="mx-auto space-y-3 transition-opacity duration-300 ease-out cursor-pointer max-w-fit hover:opacity-70">
        <Image src={img} alt="" quality={75} priority={true} placeholder="blur" />
        <p className="font-bold lg:text-lg font-vn">{title}</p>
      </div>
    </div>
  )
}