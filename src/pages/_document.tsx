import { Html, Head, Main, NextScript } from "next/document"
import { Analytics } from "@vercel/analytics/react"
;<Analytics />
export default function Document() {
  return (
    <Html lang='en' className='darker'>
      <Head />
      <body className='darker'>
        <Main />
        <NextScript />
      </body>
      <Analytics />
    </Html>
  )
}
