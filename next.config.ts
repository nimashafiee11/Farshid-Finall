import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  // output : 'export' ,
  trailingSlash: true ,
  reactStrictMode: true,
   // basePath : '/feroservice.info'
  // images: {
  //   domains : ['feroservice.info'] , 
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'feroservice.info',
  //       port: '',
  //       pathname: '**',
  //     },
  //   ],
  // },
};

export default nextConfig;