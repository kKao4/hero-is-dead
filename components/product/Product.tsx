import Image from "next/image"
import Link from "next/link"

export default function Product({ img, title, href }: { img: any, title: string, href: string }) {
  return (
    <Link href={href} className="col-span-1">
      <div className="mx-auto space-y-3 transition-opacity duration-300 ease-out cursor-pointer max-w-fit hover:opacity-70">
        <Image src={img} alt="" quality={75} priority={true} placeholder="blur" />
        <p className="font-bold lg:text-lg font-vn">{title}</p>
      </div>
    </Link>
  )
}