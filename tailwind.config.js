/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "../docs/**/*.mdx", "../blog/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    extend: {},
  },
  plugins: [],
}