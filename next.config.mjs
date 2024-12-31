/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible"

const nextConfig = {
  reactStrictMode: true,
}

export default withPlausibleProxy({
  customDomain: "https://analytics.jordy.world", // Point to your self-hosted Plausible instance
})(nextConfig)
