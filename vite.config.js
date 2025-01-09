import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-html-purgecss";

export default defineConfig({
    root: resolve(__dirname, "src/"),
    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                about: resolve(__dirname, "src/pages/about/index.html"),
            },
        },
    },
    plugins: [htmlPurge()],
});
