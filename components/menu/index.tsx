import { useState } from "react"
import DesktopMenu from "./DesktopMenu"
import ModalMenu from "./ModalMenu"
import Container from "./Container"
import dynamic from "next/dynamic"
const DynamicMobileMenu = dynamic(() => import("./MobileMenu"))

export default function Menu() {
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState<boolean>(false)
  return (
    <>
      <Container>
        <DesktopMenu />
        <DynamicMobileMenu
          isOpenResponsiveMenu={isOpenResponsiveMenu}
          setIsOpenResponsiveMenu={setIsOpenResponsiveMenu}
        />
      </Container>
      <ModalMenu isOpenResponsiveMenu={isOpenResponsiveMenu} />
    </>
  )
}