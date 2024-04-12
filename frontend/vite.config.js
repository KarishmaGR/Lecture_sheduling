import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import http from "https";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Proxying requests starting with `/api` to the backend
        "/api": {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          secure: false,
          agent: new http.Agent(),
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
  };
});
