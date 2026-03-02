/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,mdx}",
        "./pages/**/*.{js,jsx,mdx}",
        "./components/**/*.{js,jsx,mdx}",
        "./lib/**/*.{js,jsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
            }
        },
    },
    plugins: [],
};
