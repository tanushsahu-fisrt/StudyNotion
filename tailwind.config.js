/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        richblack: {
          5: "#FFFFFF",    // Pure white for the background
          25: "#F0F4F8",   // Light cool white for section backgrounds or borders
          100: "#D9E2EC",  // Soft light blue for input fields or inactive elements
          200: "#BCCCDC",  // Muted blue-gray for secondary text or icons
          700: "#486581",  // Medium blue for headings or buttons
          800: "#334E68",  // Dark blue for primary text or card backgrounds
          900: "#243B53",  // Deep blue for bold contrast text or headers
        },
        
        blue: {
          100: "#3A86FF",  // Bright blue for primary buttons or call-to-actions
        },
        
        green: {
          200: "#06D6A0",  // Fresh green for success messages or interactive elements
        },
        
        orange: {
          100: "#FF9F1C",  // Warm orange for highlights or attention-grabbing buttons
        },
        
        yellow: {
          50: "#FFD166",   // Soft yellow for warnings or highlights
        },
        
      },
    },
  },
  plugins: [],
};
