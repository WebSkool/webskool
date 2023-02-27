/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: 'randomuser.me',
            },
        ],
    },
}

module.exports = nextConfig
