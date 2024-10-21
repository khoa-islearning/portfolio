import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/portfolio/",
    build: {
        outDir: "dist",
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, "./src/"),
        },
    },
    plugins: [react()],
});
