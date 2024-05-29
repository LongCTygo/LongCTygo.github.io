/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: ['light', 'forest', 'retro', "synthwave", "aqua"],
    darkTheme: "forest",
  },
  safelist: [
    "bg-red-400",
    "from-red-400",
    "bg-orange-400",
    "from-orange-400",
    "bg-yellow-400",
    "from-yellow-400",
    "bg-blue-400",
    "from-blue-400",
    "bg-purple-800",
    "from-purple-800",
    "bg-stone-200",
    "from-stone-200",
    "bg-stone-900",
    "from-stone-900",
    "bg-blue-800",
    "from-blue-800",
    "bg-zinc-600",
    "from-zinc-600",
    "text-black",
    "text-white"
  ]
}

