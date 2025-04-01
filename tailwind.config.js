/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px", // Ensure this breakpoint exists
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        title: "var(--font-title)",
        body: "var(--font-body)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background_gradient: "hsl(var(--color-background-gradient))",
        foreground: "hsl(var(--foreground))",
        nav_footer: "hsl(var(--nav-footer))",
        textNavFooter: "hsl(var(--text-nav-footer))",
        primary: {
          DEFAULT: "hsl(0, 90%, 45%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          light: "#FFF7EB", // Backgrounds (warm beige)
          DEFAULT: "#FFB65E", // Primary amber (e.g. CTA, highlights)
          dark: "#B44D0D", // Deep burnt orange (for accents / hovers)
        },
        ember: {
          light: "#FFEDD5", // Soft orange glow (used for cards / sections)
          DEFAULT: "#FB923C", // Sunset orange (secondary CTA / icons)
        },
        fire: {
          DEFAULT: "#D97706", // Header / footer / nav background
          dark: "hsl(var(--color-fire-btn))", // Footer hover, buttons on dark background
        },
        text: {
          DEFAULT: "#3B2F2F", // Warm dark brown (main text)
          soft: "#5C4A3F", // For subheadings / secondary text
          muted: "#8B735B", // Light muted text (footer, captions)
        },
        white: "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
