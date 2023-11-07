import '@/styles/globals.css'
import 'animate.css';
import "yet-another-react-lightbox/styles.css";
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Menu from '@/components/menu'
import { store } from '@/store'
import { Provider } from 'react-redux'
import Footer from '@/components/Footer';

const modesto = localFont({ src: '../fonts/Modesto Poster W05 Regular.ttf' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${modesto.className} relative bg-root-white`}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  )
}
