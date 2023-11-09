import '@/styles/globals.css'
import 'animate.css';
import "yet-another-react-lightbox/styles.css";
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Menu from '@/components/menu'
import { store } from '@/store'
import { Provider } from 'react-redux'
import Footer from '@/components/Footer';
import { Montserrat } from "next/font/google"

const modesto = localFont({ src: '../fonts/Modesto Poster W05 Regular.ttf', variable: "--font-modesto" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-vn"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${modesto.variable} ${montserrat.variable} font-modesto relative bg-root-white text-black`}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  )
}
