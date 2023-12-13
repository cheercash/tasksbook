/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        "el-sm": "1.5rem", // 24px
        "el-md": "2.75rem", // 44px
        "el-lg": "3.75rem", // 60px
        "el-xl": "6.25rem", // 100px

        "px-xs": "1rem", // 16px
        "px-lg": "2rem", // 32px
        "px-2xl": "4rem", // 64px

        "screen-sm": "36rem", // 576px
        "screen-md": "48rem", // 768px
        "screen-lg": "62rem", // 992px
        "screen-xl": "80rem", // 1280px
        "screen-2xl": "90rem", // 1440px
      },
      lineHeight: {
        default: "112%",
      },
    },
    screens: {
      sm: "36rem", // 576px
      md: "48rem", // 768px
      lg: "62rem", // 992px
      xl: "80rem", // 1280px
      "2xl": "90rem", // 1440px
    },

    fontSize: {
      "body1-lg": "0.875rem", // 14px
      "h1-lg": "2.25rem", // 36px
      "h2-lg": "1.5rem", // 24px
      "h3-lg": "1.25rem", // 20px
      "h4-lg": "1.125rem", // 18px
      "subtitle1-lg": "1rem", // 16px
      "subtitle2-lg": "0.875rem", // 14px

      "button1-lg": "1rem", // 16px
      "overline-lg": "0.75rem", // 12px
    },
    fontWeight: {
      "body1-lg": 400,
      "h1-lg": 600,
      "h2-lg": 600,
      "h3-lg": 700,
      "h4-lg": 600,
      "subtitle1-lg": 600,
      "subtitle2-lg": 600,

      "button1-lg": 600,
      "overline-lg": 600,
    },

    colors: {
      "accents-primary": "#976ECC",
      "accents-success": "#ECCA75",
      "accents-danger": "#F05454",
      "on-accent": "#FFFFFF",

      "light-main": "#FAFAFA",
      "light-contrast": "#282846",
      "light-surface": "#FFFFFF",
      "light-opacitied": "#DDDDE1",
      "light-stroke": "#E9E9EC",

      "dark-main": "#222831",
      "dark-contrast": "#F9F9F9",
      "dark-surface": "#2C3440",
      "dark-opacitied": "#DDDDE1",
      "dark-stroke": "#66666B",
    },
    boxShadow: {
      md: "0 0.5rem 1.5rem 0 rgba(29, 52, 54, 0.08)",
    },

    borderRadius: {
      full: "50%",
      sm: "0.25rem", // 8px
      md: "0.5rem", // 8px
      lg: "0.75rem", // 12px
    },
    animation: {
      bubble: "bubble 0.32s 1 ease-in-out",
    },
    keyframes: {
      bubble: {
        from: {
          width: "0%",
          opacity: 1,
        },
        to: {
          width: "250%",
          opacity: 0,
        },
      },
    },
  },
  plugins: [],
};
