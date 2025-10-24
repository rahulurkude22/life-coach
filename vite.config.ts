import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  // server: {
  //   host: true, // allows access from network and external hosts
  //   port: 5173, // your port
  //   strictPort: true,
  //   allowedHosts: [
  //     "c63da6cf965f.ngrok-free.app", // add your ngrok URL host here
  //   ],
  // },
});
