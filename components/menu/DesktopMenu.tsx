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