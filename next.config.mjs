/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'airbnbbackend-production.up.railway.app',
                port: '', // Leave empty for standard HTTPS
                pathname: '/media/**',
            }
        ]
    }
};

export default nextConfig;


