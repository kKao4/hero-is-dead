import '@/styles/globals.css'
import 'animate.css';
import "yet-another-react-lightbox/styles.css";
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Menu from '@/components/menu/menu'
import { store } from '@/store'
import { Provider } from 'react-redux'
import Footer from '@/components/Footer';
import { Montserrat } from "next/font/google"
import "@/styles/nprogress.css"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import nprogress from "nprogress"
import { useWindowScroll, usePrevious } from "@uidotdev/usehooks";

const modesto = localFont({ src: '../fonts/Modesto Poster W05 Regular.ttf', variable: "--font-modesto" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-vn"
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [scrollPosition, scrollTo] = useWindowScroll();
  const previousScrollPosition = usePrevious(scrollPosition)
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false)
  useEffect(() => {
    (nprogress as any).configure({
      showSpinner: false,
      minimum: 0.2,
      trickleRate: 0.04,
    })
  }, [])
  useEffect(() => {
    router.events.on("routeChangeStart", () => nprogress.start())
    return () => router.events.off("routeChangeStart", () => nprogress.start())
  }, [router.events])
  useEffect(() => {
    router.events.on("routeChangeComplete", () => nprogress.done())
    return () => router.events.off("routeChangeComplete", () => nprogress.done())
  }, [router.events])
  useEffect(() => {
    if (scrollPosition && scrollPosition.y && previousScrollPosition.y) {
      if (scrollPosition.y < previousScrollPosition.y) {
        setIsScrollingUp(true)
      } else {
        setIsScrollingUp(false)
      }
    }
  }, [scrollPosition, previousScrollPosition])
  return (
    <Provider store={store}>
      <main className={`${modesto.variable} ${montserrat.variable} font-modesto relative bg-root-white text-black`}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
        {/* ====== Button Scroll To Top ====== */}
        <button className={`${isScrollingUp ? "bottom-2" : "-bottom-14"} w-[3.25rem] h-[3.25rem] bg-black fixed right-2 rounded-full flex justify-center items-center transition-all duration-200 ease-out hover:opacity-70`} onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
          <svg className='h-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
        </button>
      </main>
    </Provider>
  )
}
