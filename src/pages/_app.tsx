import "@/styles/globals.css"
import type { AppProps } from "next/app"
import PlausibleProvider from "next-plausible"
import { NextSeo } from "next-seo"
export default function App({ Component, pageProps }: AppProps) {
  const title = "Dracula + Tailwind"
  const domain =
    process.env.NODE_ENV === "production"
      ? "dracula-tailwind.com"
      : "localhost:3000"
  const description =
    "A Quick-Reference Color Chart Guide for integrating the Dracula theme into Tailwind."

  return (
    <PlausibleProvider
      domain='dracula-tailwind.com'
      trackOutboundLinks
      trackLocalhost={process.env.NODE_ENV !== "production"}
      selfHosted
      customDomain='https://analytics.jordy.world'
      // enabled={process.env.NODE_ENV === "production"}
    >
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `https://${domain}`,
          title,
          description,
          images: [
            {
              url: `https://${domain}/favicon.png`,
              alt: title,
            },
          ],
          site_name: domain,
        }}
      />
      <Component {...pageProps} domain={domain} />
    </PlausibleProvider>
  )
}
