/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {       
        extend: {
            gridTemplateColumns: {
                'minmax-350px': "repeat(auto-fill, minmax(350px, 1fr))",
            },
            colors: {
                'crimson': '#FF385C',
            },
        },
    },
        plugins: [],
}
