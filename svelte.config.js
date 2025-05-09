import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: "./build",
            assets: "./build",
            fallback: "404.html",
            precompress: true
        }),
        paths: {
            // @ts-ignore
            base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
        },
        env: {
            publicPrefix: "PUBLIC_",
            privatePrefix: "PRIVATE_"
        },
        alias: {
            $server: "./src/lib/server",
            $components: "./src/lib/components",
            $utils: "./src/lib/utils",
            $images: "./src/lib/images",
            $stores: "./src/lib/stores",
            $styles: "./src/lib/styles",
            $types: "./src/lib/types"
        }
    }
}

export default config
