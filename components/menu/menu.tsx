import DesktopMenu from "./DesktopMenu"
import Container from "../global/Container"
import MobileMenu from "./MobileMenu"
import dynamic from "next/dynamic"
const DynamicModalMenu = dynamic(() => import("./ModalMenu"))

export default function Menu() {
  return (
    <>
      <Container className="pt-4 lg:pt-6 xl:pt-8">
        <DesktopMenu />
        <MobileMenu />
      </Container>
      <DynamicModalMenu />
    </>
  )
}