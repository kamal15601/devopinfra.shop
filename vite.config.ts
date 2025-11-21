import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['devopinfra.shop', 'www.devopinfra.shop']
  }
});