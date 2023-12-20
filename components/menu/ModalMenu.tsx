import logo_mobile from "@/assets/logo_1line.svg"
import Image from "next/image"
import MenuLink from "./MenuLink"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { globalSelector, toggleOpenModalMenu } from "@/redux/globalSlice"
import { twJoin } from "tailwind-merge"
import { CSSTransition } from 'react-transition-group';
import { pages } from "@/data"

export default function ModalMenu() {
  const globalState = useSelector(globalSelector)
  const dispatch = useDispatch()
  return (
    <CSSTransition
      in={globalState.isOpenModalMenu}
      timeout={200}
      classNames="menu-modal"
      unmountOnExit
    >
      <div
        className="fixed top-0 w-full ease-out py-14 bg-root-white z-40"
        style={{ height: "100dvh" }}
      >
        <Link href="/" onClick={() => dispatch(toggleOpenModalMenu())}>
          <Image src={logo_mobile} alt="" className="block mx-auto max-h-14 max-w-fit lg:hidden" quality={50} />
        </Link>
        <div className="flex flex-col py-8 gap-y-6">
          {pages.map(page => {
            return (
              <MenuLink
                key={page.href}
                mobile href={page.href}
                url={page.url}
                title_1={page.title_1}
                title_2={page.title_2}
                isActive={page.href ? page.href.includes(globalState.activePage) : false}
              />
            )
          })}
        </div>
      </div>
    </CSSTransition>
  )
}