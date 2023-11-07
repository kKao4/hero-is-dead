import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='sr'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </body>
    </Html>
  )
}
