import { defineConfig } from 'rolldown';
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"


function print() {
    return (config) => {
        config.plugins.map((i) => {
            console.log("plugin", i)
            console.log("print if plugin includes two plugin under it", i.map((e, i) => {
                console.login(`plugin.i.${i}.name`, e.name, `plugin.i.${i}.config`, e.config)

            }))
            console.log("plugin.name", i.name)
            // at here I am attempting to get the configuration from svgr
            console.log("plugin.config", i.config)
            console.log("plugin.options", i.options)
        })
        return config
    }
}

export default print()({
    input: 'src/main.tsx',
    plugins: [
        react(),
        svgr({
            include: "**/*.svg?react",
        })],

}) 