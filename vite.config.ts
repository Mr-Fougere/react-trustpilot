import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "react-trustpilot",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@uidotdev/usehooks"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@uidotdev/usehooks": "usehooks",
        },
      },
    },
    emptyOutDir: true,
  },
  plugins: [
    dts({
      rollupTypes: true,
      outDir: "dist",
    }),
  ],
});
