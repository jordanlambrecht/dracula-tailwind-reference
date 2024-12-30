/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible"

const nextConfig = {
  reactStrictMode: true,
}

export default withPlausibleProxy()(nextConfig)
