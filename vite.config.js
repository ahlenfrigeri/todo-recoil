import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" faz o build funcionar mesmo aberto a partir de uma subpasta
export default defineConfig({
  plugins: [react()],
  base: "./",
});
