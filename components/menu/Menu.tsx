import DesktopMenu from "./DesktopMenu"
import Container from "../global/Container"
import MobileMenu from "./MobileMenu"
import dynamic from "next/dynamic"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { setActivePage } from "@/redux/globalSlice"
const DynamicModalMenu = dynamic(() => import("./ModalMenu"))

export default function Menu() {
  const dispatch = useDispatch()
  const router = useRouter()

  // set active page dựa theo url
  useEffect(() => {
    const firstIndex = router.pathname.indexOf("/");
    const secondIndex = router.pathname.indexOf("/", firstIndex + 1)
    console.log("🚀 ~ file: menu.tsx:19 ~ useEffect ~ secondIndex:", secondIndex)
    if (router.pathname !== "/") {
      if (secondIndex !== -1) {
        dispatch(setActivePage(router.pathname.slice(firstIndex + 1, secondIndex) as any))
      } else {
        dispatch(setActivePage(router.pathname.slice(firstIndex + 1) as any))
      }
    } else {
      dispatch(setActivePage("home"))
    }
  }, [dispatch, router.pathname])

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