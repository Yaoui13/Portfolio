import { withContentCollections } from "@content-collections/next";

// basePath = "/Portfolio" en production (GitHub Pages), vide en local.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
