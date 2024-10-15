const { defineConfig } = require("cypress");
const baseUrl = process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com/web/index.php/"
const apiURL = process.env.API_URL || "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/"


module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('./cypress/plugins/index')(on, config)
            require('@cypress/code-coverage/task')(on, config)
            return config
        },
        defaultCommandTimeout: 10000,
        requestTimeout: 15000,
        viewportHeight: 1080,
        viewportWidth: 1920,
        baseUrl: baseUrl,
        reporter: 'junit',
        video: false,
        retries: {
            runMode: 2,
            openMode: 0
        },
        //numTestsKeptInMemory: 0
        testIsolation: false,
        experimentalMemoryManagement: true
    }
})  