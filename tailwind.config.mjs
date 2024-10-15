/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                yellow: '#ffc86b',
                grbg: '#34353b',
                white: '#f9f9f9',
            },
        },
    },
    plugins: [],
}
