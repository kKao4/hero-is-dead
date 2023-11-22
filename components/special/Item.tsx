import Image from "next/image"

export default function Item({ img, isVideo = false, title, handleOnClick }: { img: any, isVideo?: boolean, title: string, handleOnClick: any }) {
  return (
    <div className="col-span-1 transition-opacity duration-300 ease-out cursor-pointer hover:opacity-70 group" onClick={handleOnClick}>
      <div className="w-fit mx-auto space-y-2 lg:space-y-4">
        <div className="relative">
          <Image src={img} alt="" priority={true} quality={100} placeholder="blur" />
          {isVideo && (
            <>
              <svg className="absolute z-10 -translate-x-1/2 -translate-y-1/2 h-14 sm:h-18 drop-shadow-2xl fill-white top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
              <div className="absolute transition-opacity duration-300 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100 group-hover:opacity-0 w-14 h-14 sm:h-18 sm:w-18 player bg-black/20 top-1/2 left-1/2" />
            </>
          )}
        </div>
        <p className="md:text-lg font-bold font-vn">{title}</p>
      </div>
    </div>
  )
}