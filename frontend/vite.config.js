import { defineConfig } from "vite";
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
        "/server": {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          secure: fasle,
          agent: new http.Agent(),
        },
      },
    },
  };
});
