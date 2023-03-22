/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '15px',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                black: {
                    100: '#d4d6d8',
                    200: '#aaacb1',
                    300: '#7f8389',
                    400: '#555962',
                    500: '#2a303b',
                    600: '#22262f',
                    700: '#191d23',
                    800: '#111318',
                    900: '#080a0c',
                },
                indigo: {
                    100: '#e0e1e4',
                    200: '#c1c3c8',
                    300: '#a1a6ad',
                    400: '#828891',
                    500: '#636a76',
                    600: '#4f555e',
                    700: '#3b4047',
                    800: '#282a2f',
                    900: '#141518',
                },
                secondary: '#0e2737',
                teal: {
                    100: '#d2f3f0',
                    200: '#a4e7e0',
                    300: '#77dbd1',
                    400: '#49cfc1',
                    500: '#1cc3b2',
                    600: '#169c8e',
                    700: '#11756b',
                    800: '#0b4e47',
                    900: '#062724',
                },
                gray: {
                    100: '#eff0f2',
                    200: '#dfe1e5',
                    300: '#cfd2d9',
                    400: '#bfc3cc',
                    500: '#afb4bf',
                    600: '#8c9099',
                    700: '#696c73',
                    800: '#46484c',
                    900: '#232426',
                },
            },
            boxShadow: {
                card: '0 2px 14px 5px rgba(20, 20, 20, 0.05)',
            },
        },
    },
    plugins: [],
}
