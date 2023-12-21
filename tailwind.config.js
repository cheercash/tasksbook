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

        "el-sm-icon": "0.75rem", // 12px
        "el-md-icon": "0.875rem", // 14px
        "el-lg-icon": "1rem", // 16px

        "el-sm-px": "1rem", // 16px
        "el-md-px": "1.5rem", // 24px
        "el-lg-px": "2rem", // 32px

        "input-sm-icon-px": "2.25rem", // 36px
        "input-md-icon-px": "2.75rem", // 44px
        "input-lg-icon-px": "4rem", // 64px

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
      transitionDuration: {
        xs: "0.08s",
        sm: "0.16s",
        md: "0.32s",
        lg: "0.64s",
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
      "overline1-lg": "0.75rem", // 12px
      "caption1-lg": "0.625rem", // 10px
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
      "overline1-lg": 600,
      "caption1-lg": 500,
    },

    colors: {
      "accents-primary": "#976ECC",
      "accents-success": "#ECCA75",
      "accents-danger": "#F05454",
      "on-accent": "#FFFFFF",

      "light-main": "#FAFAFA",
      "light-contrast": "#282846",
      "light-surface": "#FFFFFF",
      "light-surface-active": "#D4D4DA",
      "light-opacitied": "#9D9DB2",
      "light-stroke": "#EEEEF0",

      "dark-main": "#222831",
      "dark-contrast": "#D9D9D9",
      "dark-surface": "#2C3440",
      "dark-surface-active": "#555B65",
      "dark-opacitied": "#86868B",
      "dark-stroke": "#3C444F",
    },
    boxShadow: {
      md: "0 0.5rem 1.5rem 0 rgba(29, 52, 54, 0.08)",
    },

    borderRadius: {
      full: "50%",
      sm: "0.25rem", // 4px
      md: "0.5rem", // 8px
      lg: "0.75rem", // 12px
    },
    animation: {
      bubble: "bubble 0.36s 1 ease-in-out",
      "dropdown-open": "dropdown-open 0.16s 1 ease-in-out forwards",
      "dropdown-close": "dropdown-close 0.16s 0.16s 1 ease-in-out forwards",
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
      "dropdown-open": {
        "0%": {
          display: "block",
        },
      },
      "dropdown-close": {
        "0%": { display: "none" },
      },
    },
  },
  plugins: [],
};
