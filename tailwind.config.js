/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false, // disable Tailwind's reset
    },
    content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "../docs/**/*.mdx", "../blog/**/*.mdx"], // my markdown stuff is in ../docs, not /src
    darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
    theme: {
        extend: {
            colors: {
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
            }
        },
    },
    plugins: [],
}