const { defineConfig } = require("cypress");
const baseUrl = process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com/"
const apiURL = process.env.API_URL || "http://localhost:3000/api/"
const dbHost = process.env.DBHOST || "localhost"
const dbPassword = process.env.DBPASSWORD || "password"

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('./cypress/plugins/index')(on, config);
            require('@cypress/code-coverage/task')(on, config);
            return config;
        },
        defaultCommandTimeout: 10000,
        requestTimeout: 15000,
        viewportHeight: 1080,
        viewportWidth: 1920,
        baseUrl: baseUrl,
        reporter: 'junit',
        video: true,
        reporterOptions: {
            mochaFile: 'results/my-test-output-[hash].xml',
            toConsole: false,
        },
        retries: {
            runMode: 2,
            openMode: 0
        },
        numTestsKeptInMemory: 0
    },
    env: {
        apiUrl: apiURL,
        db: {
            user: "user",
            host: dbHost,
            database: "postgres",
            password: dbPassword,
            port: 5432
        }
    }
});
