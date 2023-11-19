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
import { useEffect } from 'react';
import nprogress from "nprogress"

const modesto = localFont({ src: '../fonts/Modesto Poster W05 Regular.ttf', variable: "--font-modesto" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-vn"
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    nprogress.configure({
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
  return (
    <Provider store={store}>
      {/* <Script src='nprogress/nprogress.js' /> */}
      <main className={`${modesto.variable} ${montserrat.variable} font-modesto relative bg-root-white text-black`}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  )
}
