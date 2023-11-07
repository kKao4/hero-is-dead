import Image from "next/image";

export default function SockImage({ handleOnClick, src }: { handleOnClick: any, src: any }) {
  return (
    <div className="col-span-2 mx-auto lg:col-span-1 w-[100px] sm:w-[140px] xl:w-[162px] rounded-lg overflow-hidden hover:opacity-70 cursor-pointer transition-opacity duration-200" onClick={handleOnClick}>
      <Image src={src} alt="" quality={100} />
    </div>
  )
}