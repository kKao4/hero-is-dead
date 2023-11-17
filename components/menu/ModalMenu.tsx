import logo_mobile from "@/assets/logo_1line.svg"
import Image from "next/image"
import MenuLink from "./MenuLink"

export default function ModalMenu({ isOpenResponsiveMenu }: { isOpenResponsiveMenu: boolean }) {
  return (
    <div className={`${isOpenResponsiveMenu ? "opacity-100 translate-y-0 z-10" : "opacity-0 -translate-y-[100%] -z-10"} transition-all duration-400 fixed top-0 w-full ease-out h-screen py-14 bg-root-white`}>
      <Image src={logo_mobile} alt="" className="block mx-auto max-h-14 max-w-fit lg:hidden" quality={50} />
      <div className="flex flex-col py-10 gap-y-6">
        <MenuLink href="/news/page/1" title_1="News" title_2="Tin Tức" mobile={true} />
        <MenuLink href="/on-air" title_1="On Air" title_2="Phát Sóng" mobile={true} />
        <MenuLink href="/" title_1="Story" title_2="Cốt Truyện" mobile={true} />
        <MenuLink href="/" title_1="STAFF&CAST" title_2="Nhân viên và diễn viên" mobile={true} />
        <MenuLink href="/" title_1="CHARACTER" title_2="Nhân Vật" mobile={true} />
        <MenuLink href="/" title_1="PRODUCT" title_2="Sản Phẩm" mobile={true} />
        <MenuLink href="/" title_1="SPECIAL" title_2="Đặc Biệt" mobile={true} />
        <MenuLink href="/" title_1="TWITTER" title_2="TWITTER" mobile={true} />
      </div>
    </div>
  )
}