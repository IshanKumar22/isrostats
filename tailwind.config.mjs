/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        16: "1rem",
        32: "2rem",
        84: "calc(100% - 2rem)",
      },
    },
    accentColor: "rgb(136, 58, 234)",
    colors: {
      light: "rgb(224, 204, 250)",
      dark: "rgb(49, 10, 101)",
	  white: "#FFF",
    },
  },
};
