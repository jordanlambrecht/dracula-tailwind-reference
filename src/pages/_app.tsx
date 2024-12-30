import "@/styles/globals.css"
import type { AppProps } from "next/app"
import PlausibleProvider from "next-plausible"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain={"dracula-tailwind.com"}
      trackOutboundLinks={true}
      trackLocalhost={true}
      customDomain={"analytics.jordy.world"}
      selfHosted={true}
      enabled={true}
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
