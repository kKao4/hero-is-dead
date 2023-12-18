import Image from "next/image"

export default function CharacterThumb({ isActive, img, handleOnClick }: { img: any, handleOnClick: any, isActive: boolean }) {
  return (
    <div
      className={`w-12 h-12 md:w-14 md:h-14 bg-root-brown rotate-45 overflow-hidden cursor-pointer transition-all duration-200 ease-out ring-black z-30 ${isActive ? "ring-2" : "hover:ring-2"}`}
      onClick={handleOnClick}
    >
      <Image className="-rotate-45 scale-140 " src={img} alt="" quality={75} priority={true} placeholder="blur" />
    </div>
  )
}