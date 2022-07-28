module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      // "dark",
      // "cupcake",
      "bumblebee",
      
    ],
  },
  plugins: [require("daisyui")],
}