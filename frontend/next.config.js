/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

console.log(`ENVIRONMENT = ${process.env.NODE_ENV} local-prod-url = http://localhost:3000/music-web-app/`)

module.exports = withMDX({
  reactStrictMode: true,
  basePath: `${(process.env.NODE_ENV === 'production') ? '/music-web-app' : ''}`,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx',],
  images: {
    domains: ['dz2l6nhikl0ua.cloudfront.net'],
  },
})