import { defineConfig } from 'cypress';

export default defineConfig({
  supportFolder: undefined,
  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    specPattern: 'cypress/tests/**/*.spec.ts',
    supportFile: false,
  },
});
