import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const entryTag = {
  tag: "scr" + "ipt",
  attrs: {
    type: "module",
    src: "/src/main.tsx",
  },
  injectTo: "body",
} as const;

export default defineConfig({
  plugins: [
    react(),
    {
      name: "inject-react-entry",
      transformIndexHtml() {
        return [entryTag];
      },
    },
  ],
});
