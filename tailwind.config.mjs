/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bouncein: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein 1s ease-in-out forwards",
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        bouncein: "bouncein 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
