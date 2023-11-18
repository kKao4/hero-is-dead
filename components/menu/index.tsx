import DesktopMenu from "./DesktopMenu"
import Container from "./Container"
import MobileMenu from "./MobileMenu"
import dynamic from "next/dynamic"
const DynamicModalMenu = dynamic(() => import("./ModalMenu"))

export default function Menu() {
  return (
    <>
      {/* TODO: remake the close modal animation */}
      <Container>
        <DesktopMenu />
        <MobileMenu />
      </Container>
      <DynamicModalMenu />
    </>
  )
}