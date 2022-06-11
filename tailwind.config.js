/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#22d3ee",
        dark: "#1e293b",
        semidark: "#64748b",
        html: "#E34F26",
        css: "#1572B6",
        bootstrap: "#7952B3",
        javascript: "#F7DF1E",
        tailwind: "#06B6D4",
        react: "#61DAFB",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
