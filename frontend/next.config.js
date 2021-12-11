/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = {
  reactStrictMode: true,
}

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})