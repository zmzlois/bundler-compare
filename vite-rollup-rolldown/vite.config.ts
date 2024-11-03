// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { UserConfig } from 'vite'
import svgr from "vite-plugin-svgr"

function print() {
  return (config: UserConfig) => {
    // @ts-expect-error it works shut up
    console.log("config", config)
    return config
  }
}
// https://vite.dev/config/
export default print()({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    })],
})
