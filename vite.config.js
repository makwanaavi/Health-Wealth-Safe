import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          "0%": { transform: "scale(0)", opacity: "0.5" },
          "50%": { transform: "scale(1.5)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0.5" },
        },
      },
      animation: {
        "pulse-scale": "pulseScale 2s ease-in-out infinite",
      },
    },
  },
});
