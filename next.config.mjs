/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible"

const nextConfig = {
  swcMinify: true,
}

export default withPlausibleProxy()(nextConfig)
