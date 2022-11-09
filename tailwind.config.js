/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandPrimary: '#009a92',
                brandSecondary: '#f46777',
                brandHover: '#fabbb3',
                fontBase: '#24243c',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-1deg)'},
                    '50%': {transform: 'rotate(1deg)'},
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out ',
            },
        },
    },
    plugins: [],
}
