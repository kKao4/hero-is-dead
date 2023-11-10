import { useState } from "react"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import ModalMenu from "./ModalMenu"
import Container from "./Container"

export default function Menu() {
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState<boolean>(false)
  return (
    <>
      <Container>
        <DesktopMenu />
        <MobileMenu isOpenResponsiveMenu={isOpenResponsiveMenu} setIsOpenResponsiveMenu={setIsOpenResponsiveMenu} />
      </Container>
      <ModalMenu isOpenResponsiveMenu={isOpenResponsiveMenu} />
    </>
  )
}