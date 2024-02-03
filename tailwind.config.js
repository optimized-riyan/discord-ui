/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
        colors: {
            gray: {
                discordlighter: '#424549',
                discordlight: '#36393e',
                discorddark: '#282b30',
                discorddarker: '#1e2124'
            },
            blue: {
                discordblue: '#7289da'
            },
            green: {
                discordgreen: '#43b581'
            }
        }
    },
  },
  plugins: [],
}

