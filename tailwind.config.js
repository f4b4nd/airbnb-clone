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
            colors: {
                'crimson': '#FF385C',
            },
        },
    },
        plugins: [],
}
