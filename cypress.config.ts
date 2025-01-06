const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      API_URL: 'https://gotyoo.co.kr/private-api',
      CRM_API_KEY: process.env.REACT_APP_CRM_API_KEY,
      OTP_CATEGORY_ONE: 'zwquA6Pzygy9wNLyHePYfiB91uoFRki0',
    },
  },
});
