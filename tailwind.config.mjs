/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}"],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                display: ['Lora']
            },
            colors: {
                background: {
                    DEFAULT: "hsl(var(--color-bg))",
                    light: "hsl(var(--color-bg-light))",
                    dark: "hsl(var(--color-bg-dark))",
                },
                primary: { DEFAULT: "hsl(var(--color-primary))", dark: "hsl(var(--color-primary-dark))" },
                secondary: { DEFAULT: "hsl(var(--color-secondary))", light: "hsl(var(--color-secondary-light))" },
                text: "hsl(var(--color-text))",
                accent1: "hsl(var(--color-accent1))",
                accent2: "hsl(var(--color-accent2))",
                accent3: "hsl(var(--color-accent3))",
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                'fade-in-left': {
                    '0%': { opacity: 0, transform: 'translateX(-30px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },
                'fade-in-right': {
                    '0%': { opacity: 0, transform: 'translateX(30px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },
                'scale-in': {
                    '0%': { opacity: 0, transform: 'scale(0.95)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                }
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-out forwards',
                'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
                'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
                'scale-in': 'scale-in 0.5s ease-out forwards',
            }
        }
    }
}