/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible"

const nextConfig = {
  // Example: Add your Next.js configurations here
  // output: 'standalone',
}

export default withPlausibleProxy()(nextConfig)
