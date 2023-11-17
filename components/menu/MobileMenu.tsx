import Image from 'next/image'
import logo_mobile from "@/assets/logo_1line.svg"

export default function MobileMenu({ isOpenResponsiveMenu, setIsOpenResponsiveMenu }: { isOpenResponsiveMenu: boolean, setIsOpenResponsiveMenu: any }) {
  return (
    <>
      <div className="flex flex-row animate__animated animate__fadeInDown lg:hidden">
        <Image src={logo_mobile} priority={true} alt="" className="block max-h-10 max-w-fit lg:hidden" quality={50} />
      </div>
      <div className="fixed z-50 block w-8 animate__animated animate__fadeInDown top-3 right-3 h-9 lg:hidden" onClick={() => setIsOpenResponsiveMenu((prevState: any) => !prevState)}>
        <div className={`${isOpenResponsiveMenu ? "rotate-[44deg] translate-y-[9px] w-[33px]" : "rotate-0 w-8"} transition-transform top-[7px] duration-300  ease-out h-[3px] absolute bg-black`} />
        <div className={`${isOpenResponsiveMenu ? "opacity-0" : "opacity-100"} h-[3px] w-full transition-opacity duration-300 ease-out absolute top-1/2 -translate-y-1/2 bg-black`} />
        <div className={`${isOpenResponsiveMenu ? "-rotate-[44deg] -translate-y-2.5 w-[33px]" : "rotate-0 w-8"} h-[3px] transition-transform duration-300 ease-out absolute bottom-[6px] bg-black`} />
      </div>
    </>
  )
}