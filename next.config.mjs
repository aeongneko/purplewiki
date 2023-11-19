import million from "million/compiler"
import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx"
})

/** @type {import("next").NextConfig} */
const nextConfig = withNextra({
  reactStrictMode: true,
})

const millionConfig = {
  auto: true,
}

export default million.next(nextConfig, millionConfig)