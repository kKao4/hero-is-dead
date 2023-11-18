import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'
import logo from "@/assets/logo_2line.svg"
import MenuLink from './MenuLink'
import Link from 'next/link'
import MenuRevealWrapper from '../MenuRevealWrapper'

export default function DesktopMenu() {
  return (
    <MenuRevealWrapper>
      <div className="flex-row items-end hidden reveal_items lg:flex">
        <Link href={"/"} className='transition-opacity ease-out hover:opacity-60'>
          <Image src={logo} alt="" priority={true} className="h-28 xl:h-32 w-fit" quality={50} />
        </Link>
        <div className="flex-col hidden py-5 ml-auto lg:flex gap-y-4">
          <div className="flex flex-row justify-end gap-x-8">
            <MenuLink href='/news/page/1' title_1="News" title_2="Tin Tức" mobile={false} />
            <MenuLink href='/on-air' title_1="On Air" title_2="Phát Sóng" mobile={false} />
            <MenuLink href='/story' title_1="Story" title_2="Cốt Truyện" mobile={false} />
            <MenuLink href='/staff-and-cast' title_1="STAFF&CAST" title_2="Nhân viên và diễn viên" mobile={false} />
          </div>
          <div className="flex flex-row justify-end gap-x-8">
            <MenuLink href='/' title_1="CHARACTER" title_2="Nhân Vật" mobile={false} />
            <MenuLink href='/' title_1="PRODUCT" title_2="Sản Phẩm" mobile={false} />
            <MenuLink href='/' title_1="SPECIAL" title_2="Đặc Biệt" mobile={false} />
            <MenuLink href='/' title_1="TWITTER" title_2="TWITTER" mobile={false} />
          </div>
        </div>
      </div>
    </MenuRevealWrapper>
  )
}