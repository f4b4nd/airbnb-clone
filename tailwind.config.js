/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'cards': "repeat(auto-fill, minmax(350px, 1fr))",
            }
        },
    },
        plugins: [],
}
