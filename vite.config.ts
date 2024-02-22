import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend-mentor-solutions/",
  plugins: [react()],
  css: { modules: { localsConvention: "camelCaseOnly" } },
});
