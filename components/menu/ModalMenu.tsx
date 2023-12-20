import logo_mobile from "@/assets/logo_1line.svg"
import Image from "next/image"
import MenuLink from "./MenuLink"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { globalSelector, toggleOpenModalMenu } from "@/redux/globalSlice"
import { twJoin } from "tailwind-merge"
import { CSSTransition } from 'react-transition-group';

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
        className={twJoin(
          "fixed top-0 w-full ease-out py-18 bg-root-white z-40",
        )}
        style={{ height: "100dvh" }}
      >
        <Link href="/" onClick={() => dispatch(toggleOpenModalMenu())}>
          <Image src={logo_mobile} alt="" className="block mx-auto max-h-14 max-w-fit lg:hidden" quality={50} />
        </Link>
        <div className="flex flex-col py-10 gap-y-6">
          <MenuLink href="/news/page/1" title_1="News" title_2="Tin Tức" mobile={true} />
          <MenuLink href="/on-air" title_1="On Air" title_2="Phát Sóng" mobile={true} />
          <MenuLink href="/story" title_1="Story" title_2="Cốt Truyện" mobile={true} />
          <MenuLink href="/staff-and-cast" title_1="STAFF&CAST" title_2="Nhân viên và diễn viên" mobile={true} />
          <MenuLink href="/character" title_1="CHARACTER" title_2="Nhân Vật" mobile={true} />
          <MenuLink href="/product" title_1="PRODUCT" title_2="Sản Phẩm" mobile={true} />
          <MenuLink href="/special" title_1="SPECIAL" title_2="Đặc Biệt" mobile={true} />
          <MenuLink url="https://twitter.com/yuusyagasinda" title_1="TWITTER" title_2="TWITTER" mobile={true} />
        </div>
      </div>
    </CSSTransition>
  )
}