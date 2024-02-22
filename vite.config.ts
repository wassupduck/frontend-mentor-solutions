import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import wyw from "@wyw-in-js/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend-mentor-solutions/",
  plugins: [
    react(),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
  css: { modules: { localsConvention: "camelCaseOnly" } },
});
