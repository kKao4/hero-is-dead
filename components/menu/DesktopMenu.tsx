import Image from 'next/image'
import logo from "@/assets/logo_2line.svg"
import MenuLink from './MenuLink'
import Link from 'next/link'
import MenuRevealWrapper from '../global/revealWrapper/MenuRevealWrapper'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { pages } from "@/data"

export default function DesktopMenu() {
  const activePage = useSelector((state: RootState) => state.global.activePage)
  return (
    <MenuRevealWrapper>
      <div className="flex-row items-end hidden reveal_items lg:flex">
        <Link href={"/"} className='transition-opacity ease-out hover:opacity-60'>
          <Image src={logo} alt="" priority={true} className="h-28 xl:h-32 w-fit" quality={50} />
        </Link>
        <div className="flex-col hidden py-5 ml-auto lg:flex gap-y-4">
          <div className="flex flex-row justify-end gap-x-8">
            {/* <MenuLink href='/news/page/1' title_1="News" title_2="Tin Tức" mobile={false} />
            <MenuLink href='/on-air' title_1="On Air" title_2="Phát Sóng" mobile={false} />
            <MenuLink href='/story' title_1="Story" title_2="Cốt Truyện" mobile={false} />
            <MenuLink href='/staff-and-cast' title_1="STAFF&CAST" title_2="Nhân viên và diễn viên" mobile={false} /> */}
            {pages.slice(0, pages.length / 2).map((page) => {
              return (
                <MenuLink
                  key={page.href}
                  mobile={false}
                  href={page.href}
                  url={page.url}
                  title_1={page.title_1}
                  title_2={page.title_2}
                  isActive={page.href ? page.href.includes(activePage) : false}
                />
              )
            })}
          </div>
          <div className="flex flex-row justify-end gap-x-8">
            {/* <MenuLink href='/character' title_1="CHARACTER" title_2="Nhân Vật" mobile={false} />
            <MenuLink href='/product' title_1="PRODUCT" title_2="Sản Phẩm" mobile={false} />
            <MenuLink href='/special' title_1="SPECIAL" title_2="Đặc Biệt" mobile={false} />
            <MenuLink url='https://twitter.com/yuusyagasinda' title_1="TWITTER" title_2="TWITTER" mobile={false} /> */}
            {pages.slice(pages.length / 2).map(page => {
              return (
                <MenuLink
                  key={page.href}
                  mobile={false}
                  href={page.href}
                  url={page.url}
                  title_1={page.title_1}
                  title_2={page.title_2}
                  isActive={page.href ? page.href.includes(activePage) : false}
                />
              )
            })}
          </div>
        </div>
      </div>
    </MenuRevealWrapper>
  )
}