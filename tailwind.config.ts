import type { Config } from 'tailwindcss'

export default {
  // Указываем пути ко всем файлам, где используется Tailwind
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  // Настройки темы
  theme: {
    extend: {
      // Кастомные шрифты
      fontFamily: {
        marker: ['Marker', 'sans-serif'], // Основной шрифт
      },
      // Дополнительные цвета
      colors: {
        primary: '#3b82f6', // Пример кастомного цвета
      },
    },
  },

  // Плагины (если нужны)
} satisfies Config
