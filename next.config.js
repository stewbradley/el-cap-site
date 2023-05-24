/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/stewbradley/el-cap-site",
        permanent: false,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/aisurvey",
        destination: "https://elcap1.notion.site/elcap1/El-Cap-State-of-AI-Research-82d2fc2f165f407880659f1dc2f83e34",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
