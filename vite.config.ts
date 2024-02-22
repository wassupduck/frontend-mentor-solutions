import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import linaria from "@wyw-in-js/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend-mentor-solutions/",
  plugins: [
    react(),
    linaria({
      include: ["src/**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
      preprocessor: "none",
    }),
  ],
  css: { modules: { localsConvention: "camelCaseOnly" } },
});
