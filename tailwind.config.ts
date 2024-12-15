/** @type {import('tailwindcss').Config} */
export default module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-BG': '#f0a8f0',
        'green-B': '#FDF7FD',
      },
      backgroundImage: {
        'togglerinactiveimg': "url('https://i.ibb.co/rt3HybH/close.png')",
        'toggler-active-img': "url(https://i.ibb.co/rt3HybH/close.png)"
      }
    },
  },
  plugins: [],
}