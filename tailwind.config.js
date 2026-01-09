/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary
        primary: {
          DEFAULT: '#A42D53', // Deep raspberry red
          light: '#C14B6E',   // Lighter shade for hover states
          dark: '#8C2646',    // Darker shade for active states
        },
        // Secondary colors
        secondary: {
          purple: '#8B2D7D', // Rich purple
          coral: '#E85D50',  // Warm coral
        },
        // Accent colors
        accent: {
          teal: '#2D8B7D',    // Cool teal
          gold: '#D4AF37',    // Warm gold
          rose: '#FFE4E8',    // Light rose (for backgrounds)
        },
        // Background colors
        surface: {
          white: '#FFFFFF',
          light: '#F8F9FA',
          subtle: '#F3F4F6',
          muted: '#E9ECEF',
        },
        // Text colors
        text: {
          primary: '#1F2937',   // Near black for main text
          secondary: '#4B5563', // Dark gray for secondary text
          muted: '#6B7280',     // Muted text
          light: '#9CA3AF',     // Very light text
          white: '#FFFFFF',     // White text
        },
        // Border colors
        border: {
          light: '#E5E7EB',
          DEFAULT: '#D1D5DB',
          dark: '#9CA3AF',
        },
      },
    },
  },
  plugins: [],
};