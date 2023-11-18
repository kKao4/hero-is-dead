import Image from 'next/image'
import logo_mobile from "@/assets/logo_1line.svg"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { globalSelector, toggleOpenModalMenu } from '@/redux/globalSlice'
import MenuRevealWrapper from '../MenuRevealWrapper'

export default function MobileMenu() {
  const globalState = useSelector(globalSelector)
  const dispatch = useDispatch()
  return (
    <>
      <MenuRevealWrapper>
        <div className="flex flex-row lg:hidden">
          <Link href="/" className='max-w-[200px]'>
            <Image src={logo_mobile} priority={true} alt="" className="block max-h-10 max-w-fit lg:hidden" quality={50} />
          </Link>
        </div>
      </MenuRevealWrapper>
      <div className="fixed z-50 block w-8 top-3 right-3 h-9 lg:hidden animate__animated animate__fadeInDown" onClick={() => dispatch(toggleOpenModalMenu())}>
        <div className={`${globalState.isOpenModalMenu ? "rotate-[44deg] translate-y-[9px] w-[33px]" : "rotate-0 w-8"} transition-transform top-[7px] duration-300  ease-out h-[3px] absolute bg-black`} />
        <div className={`${globalState.isOpenModalMenu ? "opacity-0" : "opacity-100"} h-[3px] w-full transition-opacity duration-300 ease-out absolute top-1/2 -translate-y-1/2 bg-black`} />
        <div className={`${globalState.isOpenModalMenu ? "-rotate-[44deg] -translate-y-2.5 w-[33px]" : "rotate-0 w-8"} h-[3px] transition-transform duration-300 ease-out absolute bottom-[6px] bg-black`} />
      </div>
    </>
  )
}