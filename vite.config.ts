import { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const config: UserConfig = {
  server: {
    port: 5001,
  },
  plugins: [vue()],
};

export default config;
