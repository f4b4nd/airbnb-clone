/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {       
            container: {
                center: true,
            },     
            gridTemplateColumns: {
                'auto-270px': "repeat(auto-fill, minmax(270px, 1fr))",
            },
            fontWeight: {
                semilight: '350',
            },
            boxShadow: {
                '3xl': 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
            },
            colors: {
                'crimson': '#FF385C',
                'mediumVioletRed': '#D70466',
            },
        },
    },
    plugins: [],
}