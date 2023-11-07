import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'
import logo from "@/assets/logo_2line.svg"
import MenuLink from './MenuLink'
import Link from 'next/link'

export default function DesktopMenu() {
  return (
    <RevealWrapper className="load-hidden" distance="24px" duration={800} easing="ease-out" delay={200} >
      <div className="flex-row items-end hidden reveal_items lg:flex">
        <Link href={"/"}>
          <Image src={logo} alt="" className="max-h-28 xl:max-h-32 max-w-fit" quality={100} />
        </Link>
        <div className="flex-col hidden py-5 ml-auto lg:flex gap-y-4">
          <div className="flex flex-row justify-end gap-x-8">
            <MenuLink title_1="News" title_2="Tin Tức" mobile={false} />
            <MenuLink title_1="On Air" title_2="Phát Sóng" mobile={false} />
            <MenuLink title_1="Story" title_2="Cốt Truyện" mobile={false} />
            <MenuLink title_1="STAFF&CAST" title_2="Nhân viên và diễn viên" mobile={false} />
          </div>
          <div className="flex flex-row justify-end gap-x-8">
            <MenuLink title_1="CHARACTER" title_2="Nhân Vật" mobile={false} />
            <MenuLink title_1="PRODUCT" title_2="Sản Phẩm" mobile={false} />
            <MenuLink title_1="SPECIAL" title_2="Đặc Biệt" mobile={false} />
            <MenuLink title_1="TWITTER" title_2="TWITTER" mobile={false} />
          </div>
        </div>
      </div>
    </RevealWrapper>
  )
}