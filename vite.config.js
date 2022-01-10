const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            base: "git_searcher"
        }
    }
})